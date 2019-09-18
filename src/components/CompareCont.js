import React from 'react';
import CompareOne from "./CompareOne";
import CompareTwo from './CompareTwo';
import Home from './CompareTwo';
import Data from './Data';
import {Card, CardBody, Row, Col, Container} from 'react-bootstrap';




const paddingT = {
    paddingTop :"100px"
}

function CompareCont(props)
{
    return(
        <div className = "CompareCont" style = {paddingT}>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                            <Data/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                             <Data/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default CompareCont