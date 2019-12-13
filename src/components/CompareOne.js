import React from 'react';
import { Card, Container, Col, Row} from 'react-bootstrap';
import NavbarPage from './NavbarPage';

import Data from './Data';
const shadow = {
 
    

}

const cardSize = {width:"100%",
boxShadow:"5px 5px 5px black",}
const paddingT = {
    paddingTop:"105px",
   
}


function CompareOne(props)
{
    return(
        <div className = "Main CompareOne" style = {paddingT}>
            <NavbarPage/>

                <Container >
                    <Row>
                        <Col>
                            <Card  style = {cardSize} >
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

export default CompareOne