import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import Logo from '../images/logo_transparent.png';
import background from '../images/ball.jpg';

const style = {
    height:"100vh",
}
const height = {
   
    backgroundColor:"rgba(0, 0, 0, .4)"
}
const logoStyle = {
    width:"35rem"
}
const buttonStyle = {
    backgroundColor:"rgba(151, 148, 148, 0.3)",
border:"1.5px white solid"
}
const overlay = {
    backgroundColor:"rgba(0, 0, 0, .4)"
    
}


function Title()
{
    return(

        <div className = "Title">
           <div className = "overlay">
           <Container className = "d-flex justify-content-center align-items-center" style = {style}>
                <Row>
                    <Col xs = "12" s = "12" md = "12" lg = "12" xlg = "12">
                        <img className = "animated fadeIn" style = {logoStyle} src = {Logo}/>

                    </Col>
                    <Col  xs = "12" s = "12" md = "12" lg = "12" xlg = "12">
                        <Button style = {buttonStyle} variant = "primary btn-lg">Continue</Button>
                    </Col>
                    
                </Row>
              
            </Container>
            
           </div>
            



            
        </div>
    )
}

export default Title;