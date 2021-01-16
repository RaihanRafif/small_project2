import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../../styles/scss/scss.css";
import { BiSearchAlt } from "react-icons/bi";
import Navbarku from "../../component/Navbar";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useRouter from "use-react-router";

const ItemStore = ({ stockitem, slide_item, gotoItem }) => {
  const { history } = useRouter();
  const input = 1;
  return (
    <div className="item-category">
      <div className="heading">
        <div></div>
        <div className="nama_toko">ShopingSkuy</div>
        <div className="search">
          <input type="text" placeholder="PRODUCT" name="search" />
          <button type="submit">
            <BiSearchAlt className="search_logo" />
          </button>
        </div>
        <div className="shopping_cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <div className="main_menu">
        <div className="item_feature">
          <nav aria-label=" Page navigation example">
            <ul className="feature_list justify-content-center">
              <li className="first-feature-item page-item">FEATURED</li>
              <li className="page-item">
                <a className="feature page-link" href="#">
                  CATEGORY 1
                </a>
              </li>
              <li className="page-item">
                <a className="feature page-link" href="#">
                  CATEGORY 2
                </a>
              </li>
              <li className="page-item">
                <a className="feature page-link" href="#">
                  CATEGORY 3
                </a>
              </li>
              <li className="page-item">
                <a className="feature page-link" href="#">
                  CATEGORY 4
                </a>
              </li>
              <li className="page-item">
                <a className="feature page-link" href="#">
                  CATEGORY 5
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="item_catalog">
          <div className="category">
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[0].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[1].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[2].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
          </div>
          <div className="category">
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[3].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[4].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[5].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
          </div>
          <div className="category">
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[6].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }} >
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[7].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/item-menu" }}>
              <div
                className="item_category"
                style={{ backgroundImage: `url(${stockitem[8].foto})` }}
              >
                <h4>TITLE HERE</h4>
                <p>category</p>
              </div>
            </Nav.Link>
          </div>
        </div>
        <div className="item_filter">
          <nav aria-label=" Page navigation example">
            <ul className="filter_list justify-content-center">
              <li className="first-fitur-item page-item">ALL</li>
              <li className="page-item">
                <a className="filter page-link" href="#">
                  FILTER 1
                </a>
              </li>
              <li className="page-item">
                <a className="filter page-link" href="#">
                  FILTER 2
                </a>
              </li>
              <li className="page-item">
                <a className="filter page-link" href="#">
                  FILTER 3
                </a>
              </li>
              <li className="page-item">
                <a className="filter page-link" href="#">
                  FILTER 4
                </a>
              </li>
              <li className="page-item">
                <a className="filter page-link" href="#">
                  FILTER 5
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="number_page">
        <nav aria-label=" Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                7
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                8
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                9
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
const mapStateToProps = (props) => {
  return {
    dataitem: props.akunlogin,
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
    gotoItem: (value) =>
      dispatch({
        type: "GO_ITEM",
        value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStore);
