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
import React from "react";
import "../../src/styles/scss/scss.css";
import { Link } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";
import useRouter from "use-react-router";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
const Navbarku = ({ dataitem }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { history } = useRouter();
  const isLogin = localStorage.getItem("isLogin");
  const accLogin = JSON.parse(localStorage.getItem("accLogin"));
  if (isLogin === "true") {
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <Button size="small" variant="outlined" color="primary">
              <Nav.Link
                onClick={() => {
                  localStorage.setItem("isLogin", JSON.stringify(false));
                  localStorage.removeItem("accLogin");
                  history.push("/");
                }}
              >
                Log Out
              </Nav.Link>
            </Button>{" "}
          </ListItem>
          <ListItem>
            <Button size="small" variant="outlined" color="primary">
              <Nav.Link>Change Password</Nav.Link>
            </Button>
          </ListItem>
        </List>
        <Divider />
      </div>
    );
    return (
      <Navbar bg="none" variant="dark">
        <Form inline>
          <Nav.Link as={Link} to={{ pathname: "/cart" }}>
            {/* <MdLocalGroceryStore className="MdLocalGroceryStore" /> */}
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={dataitem.counter} color="secondary">
                <LocalGroceryStoreIcon fontSize="large"  />
              </Badge>
            </IconButton>
          </Nav.Link>

          <div>
            <React.Fragment key={"right"}>
              <Button
                size="medium"
                variant="outlined"
                color="primary"
                onClick={toggleDrawer("right", true)}
              >
                {accLogin}
              </Button>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </React.Fragment>
          </div>
        </Form>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="none" className="navbar" variant="dark">
        <Form inline>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button size="small" variant="outlined" color="primary">
              <Nav.Link as={Link} to={{ pathname: "/login" }}>
                Login
              </Nav.Link>
            </Button>
            <Button size="small" variant="outlined" color="primary">
              <Nav.Link as={Link} to={{ pathname: "/register" }}>
                Register
              </Nav.Link>
            </Button>
          </ButtonGroup>
        </Form>
      </Navbar>
    );
  }
};
const mapStateToProps = (props) => {
  return {
    dataitem: props.akunlogin,
  };
};

export default connect(mapStateToProps, null)(Navbarku);
