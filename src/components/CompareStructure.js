import React from 'react';
import { Button, Table, Card, Container, Row, Col} from "react-bootstrap";



const SizeImage = {
    width:"12rem",
    boxShadow:"5px 5px 5px 3px black"
}
 const backgroundCardSize = {
     transform:"rotate(45)"
 }

class CompareStructure extends React.Component{
  
state = {
    view:false
}
  
moreInfoHandler = () =>{
  
    if(this.state.view === false)
    {
        this.setState({
        view:true
        });
    }
    else if(this.state.view === true)
    {
        this.setState({view:false})
    }
    else console.log("Null")
}
    render(){
        let more = null;
        this.ButtonStatus = "More"
        if(this.state.view)
        {
            this.ButtonStatus = "Less"
            more = (
               
                <Table className = "text-center" sm responsive striped bordered hover>
                <tbody>     
                           <tr>
                           <th className = "lead" scope = "row">Three Pointers Percentage</th>
                           <th><h5 className = "lead">{this.props.ThreePointersPct.toFixed(2)}%</h5></th>
                           </tr> 
                           <tr>
                           <th className = "lead" scope = "row">Field Goal Attempted:</th>
                           <th><h5 className = "lead">{this.props.fieldGoalAtt}</h5></th>
                           </tr>
                           <tr>
                           <th className = "lead" scope = "row">Field Goal Made:</th>
                           <th><h5 className = "lead">{this.props.fieldGoalMade}</h5></th>
                           </tr>
                           <tr>
                           <th className = "lead" scope = "row">Field Goal Percentage:</th>
                           <th><h5 className = "lead">{this.props.fieldGoalPercent.toFixed(2)}%</h5></th>
                           </tr>
                           <tr>
                           <th className = "lead" scope = "row">Free Throw Attempted</th>
                           <th><h5 className = "lead">{this.props.freeThrowAttempt}</h5></th>
                           </tr>
                           <tr>
                           <th className = "lead" scope = "row">Free Throws Made</th>
                           <th><h5 className = "lead">{this.props.freeThrowMade}</h5></th>
                           </tr>
                           <tr>
                           <th className = "lead" scope = "row">Offensive Rebounds:</th>
                           <th><h5 className = "lead">{this.props.offReb}</h5></th>
                           </tr>  
                    </tbody>
                </Table>
            )
        }
        return(
            <div className = "CompareStructure">
                        <br/>
                       <Container>
                            <Row>
                                <Col>
                                    <Table className = "text-center " sm responsive striped bordered hover >
                                    <tbody>
                                        <th className = "text-center" rowSpan = "4" style = {backgroundCardSize}>           
                                        <img style = {SizeImage}  className = "rounded-circle" src={process.env.PUBLIC_URL + '/player_images/' + this.props.PlayerImage} alt = "player"/>
                                        </th>
        
                                                  
                                    </tbody>
                                    </Table>
                                
                                </Col>

                                <Col className = "align-items-center d-flex">
                                    <Table className = "text-center" sm responsive striped bordered hover>
                                        <tbody>
                                        <tr className = "lead">
                                        <th className = "lead" scope = "row">Name</th>
                                        <th> <h5 className = "lead">{this.props.Name}</h5></th>
                                        </tr>
                                        <tr>
                                        <th className = "lead"scope = "row">First NBA Season</th>
                                        <th><h5 className = "lead">{this.props.Season}</h5></th>
                                        </tr>
                                        <tr>
                                        <th className = "lead" scope = "row">Position</th>
                                        <th><h5 className = "lead">{this.props.Position}</h5></th>
                                        </tr> 
                                        </tbody>
                                    </Table>
                                
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Table className = "text-center" sm responsive striped bordered hover>
                        <tbody>     
                        <tr>
                                            <th className = "table-info lead" colSpan = "2" scope = "row">Offense</th>
                                            </tr>
    
                                            <tr>
                                           <th className = "lead" scope = "row">Assists</th>
                                           <th><h5 className = "lead">{this.props.Assists}</h5></th>
                                           </tr>
                                           <tr>
                                           <th className = "lead" scope = "row">Free Throw Percentage</th>
                                           <th><h5 className = "lead">{this.props.freeThrowPct.toFixed(2)}%</h5></th>
                                           </tr> 
                                           <tr>
                                           <th  className = "lead"scope = "row">Points Per Game</th>
                                           <th><h5 className = "lead">{this.props.PPG}</h5></th>
                                           </tr> 
                                                
                                     
                                           <tr>
                                           <th className = "lead" scope = "row">Three Pointers Attempted</th>
                                           <th><h5 className = "lead">{this.props.ThreePointersAttempted}</h5></th>
                                           </tr>
                                           <tr>
                                           <th className = "lead" scope = "row">Three Pointers Made</th>
                                           <th><h5 className = "lead">{this.props.ThreePointersMade}</h5></th>
                                           </tr>
                        </tbody>
                        </Table>
                                
                                
                                </Col>
                                <Col>
                                <Table className = "text-center" sm responsive striped bordered hover>
                        <tbody>     
                        <tr> 
                                            <th className = "table-info lead " colSpan = "2" scope = "row">Defense</th>
                                            </tr>
                                            <tr>
                                           <th className = "lead" scope = "row">Blocks:</th>
                                           <th><h5 className = "lead">{this.props.Blocks}</h5></th>
                                           </tr>
                                           
                                           <tr>
                                           <th className = "lead" scope = "row">Defensive Rebounds:</th>
                                           <th><h5 className = "lead">{this.props.defReb}</h5></th>
                                           </tr>
                                          
                                           <tr>
                                           <th className = "lead" scope = "row">Total Rebounds:</th>
                                           <th><h5 className = "lead">{this.props.totReb}</h5></th>
                                           </tr>
                                           <tr>
                                           <th className = "lead" scope = "row">Turn Overs</th>
                                           <th><h5 className = "lead">{this.props.turnOvers}</h5></th>
                                           </tr>    
                                           <tr>
                                           <th className = "lead" scope = "row">True STG Percentage</th>
                                           <th><h5 className = "lead">{this.props.trueSTGPct.toFixed(2)}%</h5></th>
                                           </tr>
                                              
                                
                        </tbody>
                        </Table>
                               
                            </Col>
                            </Row>
                            <Row >
                                <Col>
                                {more}
                                <Button size="lg" onClick = {this.moreInfoHandler} variant = "primary">{this.ButtonStatus}</Button>

                                </Col>
                            </Row>
                        </Container>
    
                     
                              
                         

    
                        
              
                       
                        
    
                        
                          
              
    
    
            </div>
        )
    }
}


/*
function CompareStructure(props)
{

    
    return(
        
        <div className = "CompareStructure">
              
                    <br/>

                    <Container>
                        <Row>
                            <Col>
                            <Table className = "text-center " sm responsive striped bordered hover >
                        <tbody>

                                            <th className = "text-center" rowSpan = "4" style = {backgroundCardSize}>           
                                            <img style = {SizeImage}  className = "rounded-circle" src={process.env.PUBLIC_URL + '/player_images/' + props.PlayerImage} alt = "player"/>
                                            </th>

                                            <tr className = "lead">

                                                <th className = "lead" scope = "row">Name</th>
                                                <th> <h5 className = "lead">{props.Name}</h5></th>
                                            </tr>

                                            <tr>
                                            <th className = "lead"scope = "row">First NBA Season</th>
                                            <th><h5 className = "lead">{props.Season}</h5></th>
                                            </tr>
                                            <tr>
                                            <th className = "lead" scope = "row">Position</th>
                                            <th><h5 className = "lead">{props.Position}</h5></th>
                                            </tr> 
                        </tbody>
                    </Table>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Table className = "text-center" sm responsive striped bordered hover>
                    <tbody>     
                    <tr>
                                        <th className = "table-info lead" colSpan = "2" scope = "row">Offense</th>
                                        </tr>

                                        <tr>
                                       <th className = "lead" scope = "row">Assists</th>
                                       <th><h5 className = "lead">{props.Assists}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Free Throw Percentage</th>
                                       <th><h5 className = "lead">{props.freeThrowPct.toFixed(2)}%</h5></th>
                                       </tr> 
                                       <tr>
                                       <th  className = "lead"scope = "row">Points Per Game</th>
                                       <th><h5 className = "lead">{props.PPG}</h5></th>
                                       </tr> 
                                            
                                 
                                       <tr>
                                       <th className = "lead" scope = "row">Three Pointers Attempted</th>
                                       <th><h5 className = "lead">{props.ThreePointersAttempted}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Three Pointers Made</th>
                                       <th><h5 className = "lead">{props.ThreePointersMade}</h5></th>
                                       </tr>
                    </tbody>
                    </Table>
                            
                            
                            </Col>
                            <Col>
                            <Table className = "text-center" sm responsive striped bordered hover>
                    <tbody>     
                    <tr> 
                                        <th className = "table-info lead " colSpan = "2" scope = "row">Defense</th>
                                        </tr>
                                        <tr>
                                       <th className = "lead" scope = "row">Blocks:</th>
                                       <th><h5 className = "lead">{props.Blocks}</h5></th>
                                       </tr>
                                       
                                       <tr>
                                       <th className = "lead" scope = "row">Defensive Rebounds:</th>
                                       <th><h5 className = "lead">{props.defReb}</h5></th>
                                       </tr>
                                      
                                       <tr>
                                       <th className = "lead" scope = "row">Total Rebounds:</th>
                                       <th><h5 className = "lead">{props.totReb}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Turn Overs</th>
                                       <th><h5 className = "lead">{props.turnOvers}</h5></th>
                                       </tr>    
                                       <tr>
                                       <th className = "lead" scope = "row">True STG Percentage</th>
                                       <th><h5 className = "lead">{props.trueSTGPct.toFixed(2)}%</h5></th>
                                       </tr>
                                          
                                   
                    </tbody>
                    </Table>
                            




                            </Col>
                        </Row>
                    </Container>

                    <Table className = "text-center" sm responsive striped bordered hover>
                            <tbody>     
                                       <tr>
                                       <th className = "lead" scope = "row">Three Pointers Percentage</th>
                                       <th><h5 className = "lead">{props.ThreePointersPct.toFixed(2)}%</h5></th>
                                       </tr>
                                      
                                       <tr>
                                       <th className = "lead" scope = "row">Field Goal Attempted:</th>
                                       <th><h5 className = "lead">{props.fieldGoalAtt}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Field Goal Made:</th>
                                       <th><h5 className = "lead">{props.fieldGoalMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Field Goal Percentage:</th>
                                       <th><h5 className = "lead">{props.fieldGoalPercent.toFixed(2)}%</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Free Throw Attempted</th>
                                       <th><h5 className = "lead">{props.freeThrowAttempt}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Free Throws Made</th>
                                       <th><h5 className = "lead">{props.freeThrowMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Offensive Rebounds:</th>
                                       <th><h5 className = "lead">{props.offReb}</h5></th>
                                       </tr>  
                                </tbody>
                            </Table>
                            {More}
                         <Button {moreInfoHandler} variant = "primary">More</Button>

                    
          
                   
                    

                    
                      
          


        </div>
    )
}
*/

export default CompareStructure