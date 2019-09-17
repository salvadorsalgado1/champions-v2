import React from 'react';
import {Button, Card, CardBody, Container, Col, Row} from "react-bootstrap";

const top = {
    paddingTop:"100px"
}


function CompareTwo()
{
    return(
        <div className = "CompareTwo">


       <Container style  = {top}>
           <Row>
               <Col>
               <Card>
                   <Card.Body>
                   <h1>salvador</h1>
                       <h5>Field Goals: 45</h5>
                       <h5>Three Pointers: 38</h5>
                   </Card.Body>
               </Card>
               </Col>
               <Col>
               <Card>
                   <Card.Body>
                       <div className = "statContainer">
                        <h1>salvador</h1>
                       <h5>Name</h5>
                       <h5>Pin Number</h5>
                       <h5>Three Pointers:35</h5>
                       <h5>Total Points:45</h5>
                       <h5>Triple Doubles</h5>
                       <h5>Points Per Game</h5>
                       <h5>Wins</h5>
                       <h5>Years in league: 34</h5>
                       
                       </div>
                       
                   </Card.Body>
               </Card>
               </Col>
            
           </Row>
       </Container>


        </div>
    )
}

export default CompareTwo