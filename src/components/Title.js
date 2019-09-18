import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import Logo from '../images/logo_transparent.png';
import background from '../images/ball.jpg';
import {Link, } from 'react-router-dom';
import Stats from './Stats';
import CompareCont from './CompareCont';
import CompareOne from './CompareOne';
import Main from './Main';
const style = {
    height:"100vh",
}

const logoStyle = {
    width:"75%",
    maxWidth:"100%",

    border:"2px red solid"
}
const buttonStyle = {
    backgroundColor:"rgba(151, 148, 148, 0.3)",
border:"1.5px white solid"
}
const overlay = {
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
                        <Link to = "/main" component = {Main}>    
                        <img className = "animated fadeIn" style = {logoStyle} src = {Logo}/>
                        </Link>
                    </Col>                  
                </Row>
            </Container>
            
           </div>
            



            
        </div>
    )
}

export default Title;