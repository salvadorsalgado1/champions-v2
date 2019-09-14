import React from 'react';
import {Card, Body, Container, Row, Col, Table} from 'react-bootstrap';

const top = {
    paddingTop:"3rem"
}


function Stats()
{
    return(
        <div style = {top} className = "Table">


            <Container>
                <Row>
                <Col>

                    <Card>

                        <Card.Body>
                            <h1>salvador</h1>
                        </Card.Body>
                    </Card>




                </Col>
                </Row>
                <Row>
                    <Col>

                    <Card>

                        <Card.Body>
                            <Table responsive striped bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First</th>
                                       
                                        <th>Middle</th> 
                                        <th>Last</th>
                                        <th>Pin</th>
                                        <th>#</th>
                                        <th>First</th>
                                       
                                        <th>Middle</th> 
                                        <th>Last</th>
                                        <th>Pin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope = "row">1</th>
                                        <th>Salvador</th>
                                        <th>Salgado</th>
                                    </tr>
                                    <tr>
                                        <th scope = "row">2</th>
                                        <th>Rodrigo</th>
                                        <th>Curiel</th>
                                    </tr>
                                    <tr>
                                        <th scope = "row">3</th>
                                        <th>Edson</th>
                                        <th>Rodriguez</th>
                                    </tr>
                                    <tr>
                                        <th scope = "row">3</th>
                                        <th>Jalen</th>
                                        <th>Love</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                   


                    </Col>
                 
                </Row>
            </Container>
            

        </div>
    )
}

export default Stats