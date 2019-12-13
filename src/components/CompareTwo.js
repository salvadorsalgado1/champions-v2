import React from 'react';
import Data from './Data';
import {Card, Row, Col, Container} from 'react-bootstrap';
import NavbarPage from './NavbarPage';
import Data2 from './Data2';

const shadow = {boxShadow:"5px 5px 5px black"}


function CompareTwo(props)
{
    return(
        <div className = "Main"  >
            <NavbarPage/>
                <Container className = "mt-5 mb-4">
                    <Row className = "mb-4">
                        <Col>
                            <Card style = {shadow} className = "lead">
                                <Card.Body>
                               
                             

                                    <Data/>
                                 
                         
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                        
                        <Col>

                            <Card style = {shadow} className = "lead">
                                <Card.Body>

                                   
                                    <Data2/>
                              
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default CompareTwo