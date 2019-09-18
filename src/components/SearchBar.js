import React from 'react';
import {Col, Container, Row,Form, InputGroup, FormControl, Button} from 'react-bootstrap';

function SearchBar()
{
    return(
        <div className = "SearchBar">
            <p className = "lead">Search for your second player!</p>
            <Container>
                <Row>
                    <Col> 
                    <Form>
                        <FormControl block type = "text" placeholder="Search" className = "mr-sm-2"/>
                    </Form>
                    </Col>
                    <Col>
                        <Button variant = "primary">Submit</Button>
                    </Col>
                </Row>

            </Container>



        </div>
    )
}
export default SearchBar