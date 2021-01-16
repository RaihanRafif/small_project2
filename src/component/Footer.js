import group from '../img/Group.png'
import React from 'react';
import {Row}from 'react-bootstrap'

const Footer =() =>{
    return(
        <Row className='footer'>
          <img src={group} alt="Logo" />;
        </Row>
    )
}
export default Footer;