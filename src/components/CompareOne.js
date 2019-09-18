import React from 'react';
import {Button, Card, CardBody, Container, Col, Row} from "react-bootstrap";
import SearchBar from './SearchBar';


function CompareOne(props)
{
    return(
        <div className = "CompareOne">

          
                      <SearchBar/>
                      <br/>
                      <br/>
                       <div className = "statContainer">

                      <h5>Name:&nbsp;{props.Name}</h5>
                      <h5>First NBA Season:&nbsp; {props.Season}</h5>
                      <h5>Position:&nbsp;{props.Position}</h5>
                      <h5>Asists:&nbsp;{props.Assists}</h5>
                      <h5>Blocks:&nbsp;{props.Blocks}</h5>
                
                      <h5>Field Goal Attempted:&nbsp;{props.fieldGoalAtt}</h5>
                      <h5>Field Goal Made:&nbsp;{props.fieldGoalMade}</h5>
                      <h5>Field Goal Percentage:&nbsp;{props.fieldGoalPercent}</h5>
                      <h5>Free Throw Attempts:&nbsp;{props.freeThrowAttempt}</h5>
                      <h5>Free Throw Made:&nbsp;{props.freeThrowMade}</h5>

                      <h5>Free Throw Percentage:&nbsp;{props.freeThrowPct}</h5>
                      <h5>Points Per Game:&nbsp;{props.PPG}</h5>
                      <h5>Three Pointers Attempted:&nbsp;{props.ThreePointersAttempted}</h5>
                      <h5>Three Pointers Made:&nbsp;{props.ThreePointersMade}</h5>
                      <h5>Three Pointers Percentage:&nbsp;{props.ThreePointersPct}</h5>
                      
                      <h5>True STG Percentage:&nbsp; {props.trueSTGPct}</h5>
                      <h5>Defensive Rebounds:&nbsp;{props.defReb}</h5>
                      <h5>Offensive Rebounds:&nbsp;{props.offReb}</h5>
                      <h5>Total Rebounds:&nbsp;{props.totReb}</h5>
                      <h5>Turnovers:&nbsp;{props.turnOvers}</h5>
                      
                      <h5>Steals:&nbsp;{props.steals}</h5>



                       </div>
          


        </div>
    )
}

export default CompareOne