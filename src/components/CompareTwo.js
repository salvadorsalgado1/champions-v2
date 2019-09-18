import React from 'react';
import {Button, Card, CardBody, Container, Col, Row} from "react-bootstrap";



function CompareTwo(props)
{
    return(
        <div className = "CompareTwo">


       
                       <div className = "statContainer">
                        <h5>Name:&nbsp;{props.Name}</h5>
                       <h5>Position:&nbsp;{props.Position}</h5>
                       <h5>Asists:&nbsp;{props.Assists}</h5>
                      <h5>Blocks:&nbsp;{props.Blocks}</h5>
                      <h5>First NBA Season:&nbsp; {props.Season}</h5>
                      <h5></h5>
                      
                       </div>
          


        </div>
    )
}

export default CompareTwo