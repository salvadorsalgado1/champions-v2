import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
const style = {
    width:"100%",
    justifyContent:"center",
    height:"30rem",
    display:"flex",
    maxWidth:"20rem"
}
class Results extends Component{
    render(){
        return(
            <div>
                    <Card style  = {style}>
                        <Card.Body>
                            <h1>salvador</h1>
                        <Table striped hover>
                            <thead>
                            <th scope = "col">#</th>
                                <th scope = "col">Player Name</th>
                            <th scope = "col">Position</th>
                            </thead>

                            <tbody>
                              <tr>
                                  <th scope = "row">1</th>
                                  <td>Kobe</td>
                                  <td>Pf</td>
                              </tr>
                              <tr>
                                  <th scope = "row">2</th>
                                  <td>Kobe</td>
                                  <td>Pf</td>
                              </tr>
                              <tr>
                                  <th scope = "row">3</th>
                                  <td>Kobe</td>
                                  <td>Pf</td>
                              </tr>
                              <tr>
                                  <th scope = "row">4</th>
                                  <td>Kobe</td>
                                  <td>Pf</td>
                              </tr>
                              <tr>
                                  <th scope = "row">5</th>
                                  <td>Kobe</td>
                                  <td>Pf</td>
                              </tr>
                             
                            </tbody>
                        </Table>
                        
                        </Card.Body>

                    </Card>
            </div>
        )
    }
}

export default Results