import React from 'react';
import { Card, Container, Col, Row} from 'react-bootstrap';
import NavbarPage from './NavbarPage';

import Data from './Data';



const paddingT = {
    paddingTop:"100px"
}

function CompareOne(props)
{
    return(
        <div className = "Main CompareOne" style = {paddingT}>
            <NavbarPage/>

                <Container>
                    <Row>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Data/>                                 
                                            </Col>             
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
          


        
    )
}

export default CompareOne