import React from 'react';
import CompareOne from "./CompareOne";
import CompareTwo from './CompareTwo';
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
                                    <CompareOne
                                    
                                    Name = "Salvador Salgado" /*full name from DB*/
                                    Position = "Forward"
                                    Pin = "1234"
                                    Three = "432"
                                    Points = "3423"
                                    PPG = "45.4"
                                    Wins = "200"
                                    League = "8"
                                    
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                <CompareOne
                                    
                                    Name = "Salvador Salgado"
                                    Position = "Forward"
                                    Pin = "1234"
                                    Three = "432"
                                    Points = "3423"
                                    PPG = "45.4"
                                    Wins = "200"
                                    League = "8"
                                    
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default CompareCont