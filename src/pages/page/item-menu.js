import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/scss/scss.css";
import Navbarku from "../../component/Navbar";
import Footer from "../../component/Footer";
import Select from "react-select";
import { connect } from "react-redux";

const ItemMenu = ({
  slide_item,
  stockitem,
  dataitem,
  tambahItem,
  nextItem,
  prevItem,
}) => {
  const [itemsize, setItemSize] = useState("");
  const [index, setIndex] = useState(0);
  const harga_diskon =
    stockitem[index].harga -
    (stockitem[index].harga * stockitem[index].diskon) / 100;

  function AddtoCart() {
    const isLogin = localStorage.getItem("isLogin");
    const itemBuying = {
      content: stockitem[index].content,
      harga: harga_diskon,
      foto: stockitem[index].foto,
    };
    if (isLogin == "true") {
      tambahItem(itemBuying);
    } else {
      alert("Login Dulu Bro");
    }
  }
  console.log(dataitem);
  const next = () => {
    if (index === stockitem.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(stockitem.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // function item_menu() {
  //   show(slide_item);
  // }

  // function scrl_item(n) {
  //   show((slide_item += n));
  // }

  // function show(n) {
  //   var i;
  //   var x = stockitem.length - 1;
  //   if (n > x) {
  //     slide_item = 0;
  //   }
  //   if (n < 0) {
  //     slide_item = x;
  //   }

  // }
  const data = [
    {
      value: "sm",
      label: "Small",
    },
    {
      value: "md",
      label: "Medium",
    },
    {
      value: "lg",
      label: "Large",
    },
    {
      value: "xl",
      label: "Extra Large",
    },
  ];
  const handleChange = (e) => {
    setItemSize(e.value);
  };
  return (
    <Container fluid className="item-menu">
      <Row>
        <Col>
          <Navbarku />
        </Col>
      </Row>

      <Row className="item-info">
        <Col className="item-picture">
          <div className="product_img">
            <img src={stockitem[index].foto} alt="" />
          </div>
          <div className="button-sec">
            <button
              onClick={(e) => {
                prev();
              }}
            >
              {" "}
              &#60;{" "}
            </button>
            <button onClick={(e) => next()}> &#62; </button>
          </div>
        </Col>
        <Col className="item-desc">
          <div className="title-item">
            <p>Color</p>
            <h3>{stockitem[index].content}</h3>
          </div>
          <div className="product-price">
            <p className="adisc">
              $
              {stockitem[index].harga -
                (stockitem[index].harga * stockitem[index].diskon) / 100}
            </p>
            <p className="bdisc" id="harga_barang">
              ${stockitem[index].harga}
            </p>
          </div>
          <div className="info-item" id="product_desc">
            <p>{stockitem[index].desc}</p>
          </div>
          <Row className="item-size">
            <Col>
              <label>Size:</label>
            </Col>
            <Col>
              <Select
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    border: "none",
                    boxShadow: "none",
                    border: state.isFocused && "none",
                  }),
                  menu: (provided, state) => ({
                    ...provided,
                    border: "none",
                    boxShadow: "none",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isFocused && "lightgray",
                    color: state.isFocused && "grey",
                  }),
                }}
                placeholder="Select Option"
                value={data.find((obj) => obj.value === itemsize)}
                options={data}
                onChange={handleChange}
                className="select"
              />
            </Col>
          </Row>
          <div className="item-material">
            <p id="sex">Mens</p>
            <p>{stockitem[index].material}</p>
          </div>
          <button
            className="add-to-cart"
            onClick={(e) => {
              AddtoCart();
            }}
          >
            ADD TO CART
          </button>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

const mapStateToProps = (props) => {
  return {
    dataitem: props.akunlogin.item,
    stockitem: props.akunlogin.stockitem,
    slide_item: props.akunlogin.slide_item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahItem: (value) =>
      dispatch({
        type: "ADD_ITEM",
        value,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);
