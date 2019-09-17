import React from 'react';
import {Card, Body, Container, Row, Col, Table} from 'react-bootstrap';
import StatRow from './StatRow';


const top = {
    paddingTop:"100px"
}


function Stats(props)
{
    return(
        <div style = {top} className = "Stats">

            <div data-spy = "scroll" className = "scrollspy">

           
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
                                        <th>3-Pointers</th>
                                        <th>Points</th>
                                        <th>TripleD</th> 
                                        <th>PPG</th>
                                        <th>Win</th>
                                        <th>Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/*regular html w/o props */}
                                         <th scope = "row">1</th>
                                       <th>Salvador</th>
                                       <th></th>
                                       <th>Salgado</th>
                                       <th>2311</th>
                                       <th>455</th>
                                       <th>10292</th>
                                       <th>22</th>
                                       <th>45.4</th>
                                       <th>3</th>
                                       <th>9</th>

                                       
                                    </tr>
                                       
                                    <StatRow 
                                    num = "2"
                                    Name = "Jalen"
                                    mName = "Micah"
                                    LName = "Love"
                                    Pin = "1122"
                                    Pointers = "333"
                                    Points = "893"
                                    TripleD = "44"
                                    PPG = "60.8"
                                    Win = "120"
                                    Years = "5"
                                    /> 
                                    
                                    <StatRow 
                                    num = "3"
                                    Name = "Rodrigo"
                                    mName = "Ullyses"
                                    LName = "Curiel"
                                    Pin = "1234"
                                    Pointers = "120"
                                    Points = "60"
                                    TripleD = "5"
                                    PPG = "33.8"
                                    Win = "78"
                                    Years = "3"
                                    /> 
                                      <StatRow 
                                    num = "4"
                                    Name = "LeBron"
                                    mName = ""
                                    LName = "James"
                                    Pin = "1904"
                                    Pointers = "120"
                                    Points = "60"
                                    TripleD = "11"
                                    PPG = "56.8"
                                    Win = "201"
                                    Years = "8"
                                    /> 
                            

                                    
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                   


                    </Col>
                 
                </Row>
            </Container>
            
            </div>
        </div>
    )
}

export default Stats