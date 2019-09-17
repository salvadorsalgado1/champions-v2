import React from 'react';
import {Button, Card, CardBody, Container, Col, Row} from "react-bootstrap";



function CompareOne(props)
{
    return(
        <div className = "CompareOne">


       
                       <div className = "statContainer">
                        <h5>Name:&nbsp;{props.Name}</h5>
                       <h5>Position:&nbsp;{props.Position}</h5>
                       <h5>Pin:&nbsp;{props.Pin}</h5>
                       <h5>Three's Made:&nbsp;{props.Three}</h5>
                       <h5>Points Made:&nbsp;{props.Points}</h5>
                       <h5>Points Per Game:&nbsp;{props.PPG}</h5>
                       <h5>Total Team Wins:&nbsp;{props.Wins}</h5>
                       <h5>Years in League:&nbsp;{props.League}</h5>
                       </div>
          


        </div>
    )
}

export default CompareOne