import React from "react";
import {Link} from 'react-router-dom';
import NavbarPage from './NavbarPage';
import background from '../images/logo_transparent.png';

const cardStyle = {
width:"25rem",
boxShadow:"5px 5px 5px black"
}
const backgroundStyle = {
    opacity:".05"
}
const shadowStyle = {
boxShadow:"3px 3px 3px black"
}

function Introduction(){
    return(
        <div className = "introduction" >
            <NavbarPage/>
                <div style = {cardStyle}>
                <div className = "text-center">
                <div style = {backgroundStyle} src={background} alt="Card image" />
                <div>
                <p className = "lead">Welcome to Champions. With this application, you have the ability to look up stats for your
                favorite player and compare both of them and see how their stats stack up with each other.
                <br/> 
                <i className="fas fa-basketball-ball fa-2x"></i>
                 <br/>Click a div below to begin!</p>
                 <div>
                 <br/>
                <br/>
                     <div>
                         <div xs = "6" sm = "6" md = "6" lg = "6" xlg = "6">
                         <Link to = "/oneplayer" component={'/CompareOne'} >
                            <div style = {shadowStyle} block variant = "info"><i className="fas fa-user"></i></div>
                            </Link>
                         </div>

                         <div xs="6" sm = "6" md = "6" lg = "6" xlg = "6">
                         <Link to="/twoplayers" component={'./CompareTwo'}>
                  <div style = {shadowStyle} block variant = "info"><i className="fas fa-user-friends"></i></div>
                  </Link>
                         </div>
                     </div>
                 </div>
                </div>
                </div>
            </div>
            </div>
    )
}
export default Introduction