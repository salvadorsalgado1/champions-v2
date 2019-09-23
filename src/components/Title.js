import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Logo from '../images/logo_transparent.png';

import {Link } from 'react-router-dom';
import Data from './Data';
import Main from './Main';

const style = {
    height:"100vh",
}

const logoStyle = {
    width:"75%",
   maxWidth:"100%",

    border:"2px red solid"
}



function Title()
{
    return(

        <div className = "Title">
           <div className = "overlay">
           <Container className = "d-flex justify-content-center align-items-center" style = {style}>
                <Row>
                    <Col xs = "12" s = "12" md = "12" lg = "12" xlg = "12">
                        <Link to = "/home" component = {'./Main'}>    
                        <img className = "animated fadeIn" style = {logoStyle} src = {Logo} alt = "logo"/>
                        </Link>
                    </Col>                  
                </Row>
            </Container>

           
           </div>
        </div>
    )
}

export default Title;