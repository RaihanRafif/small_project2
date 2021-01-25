import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/scss/scss.css";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Navbarku from "../../component/Navbar";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: "-1px",
  },
}));
const Cart = ({ dataitem, tambah_qty }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const total = () => {
    var totalItem = 0;
    var i=0;
    for (i; i < dataitem.length; i++) {
      totalItem += dataitem[i].qty;
      console.log(totalItem)
    }
    return totalItem;
    
  };
  return (
    <div className="cart">
      <Row className="navbarku">
        <Button
          style={{
            height: "40px",
            width: "100px",
            marginLeft: "210px",
            marginTop: "25px",
            fontSize: "20px",
          }}
          as={Link}
          to={{ pathname: "/item-menu" }}
          size="sm"
          variant="primary"
        >
          Back
        </Button>
        <Navbarku />
      </Row>
      <Row className="cart-item">
        <div className="cart-list">
          <div className="keranjang">
            <h1>KERANJANG</h1>
          </div>
          <div className="list-keranjang">
            {dataitem.map((val, index) => (
              <div className="item-buying" key={index}>
                <Row>
                  <Col>
                    <img src={val.foto}></img>
                  </Col>
                  <Col className="item-desc">
                    <Row>
                      <p>{val.content}</p>
                    </Row>
                    <Row>
                      <h3>${val.harga}</h3>
                    </Row>
                    <Row className="row-btn-plsmns">
                      <button className="btn-plsmns">-</button>
                      <p style={{ marginLeft: "5px", marginRight: "5px" }}>
                        {val.value}
                      </p>
                      <button
                        className="btn-plsmns"
                        onClick={() => tambah_qty()}
                      >
                        +
                      </button>
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>

        <div className="paid-list">
          <h2>Ringkasan belanja</h2>
          <div className="ringkasan-belanja">
            <p>
              TOTAL BARANG : <b>{total()}</b>
            </p>
          </div>
          <div className="harga-bayar">
            <div className="total-harga">
              <p>
                TOTAL HARGA :{" "}
                <span>
                  <b>0</b>
                </span>
              </p>
            </div>
            <div className="pembayaran">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Pembayaran</InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"BNI"}>BNI</option>
                  <option value={"BRI"}>BRI</option>
                  <option value={"COD"}>COD</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <Button className="btn-bayar" variant="primary">
              BELI
            </Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    dataitem: props.akunlogin.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahItem: (value) =>
      dispatch({
        type: "ADD_ITEM",
        value,
      }),
    tambah_qty: (value) =>
      dispatch({
        type: "PLUS_ITEM",
        value,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
