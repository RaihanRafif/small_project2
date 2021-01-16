import React from 'react';
import {Container, Row, Col, NavbarBrand, Nav,Navbar, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../styles/scss/scss.css'
import Navbarku from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className='home'>
        <Navbarku/>
        <Row className='heading'>
            <Col className='text_heading'>
            <p>
              Choose <b>as you want</b><br></br> Pay<b> as you can</b>
              </p>
              </Col>
        </Row>
        <Row className='mid_item'>
           <Col className='shop_now'>
           <Nav.Link as={Link} to={{ pathname: "/item-store" }} >
              <Button size="small" variant="contained" color="light">
                SHOP NOW
            </Button>
            </Nav.Link>
           </Col> 
           <Col className='quotes'>
             <p><b>New Concept</b> of Online Shopping</p>
           </Col>
        </Row>
        <Footer/>
    </Container>
  );
}

export default Home; 