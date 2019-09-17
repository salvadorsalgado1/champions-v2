import React from 'react';
import {Navbar, NavbarBrand, Button, Container, Row, Col, NavbarToggler } from 'react-bootstrap';


const textColor = {
color:"white"
}

const textSize = {
fontSize : ".75rem"
}
let yearJoin = 2015;

function NavbarPage() {
    return(

 <div className = "navbar bg-dark navbar-expand-lg fixed-top">

    
    <NavbarBrand>
        <a classname = "lead" style = {textColor} href = "/">PathWays Banking,<p style = {textSize} className = "lead">Member since {yearJoin}</p></a>
        
    </NavbarBrand>

    <Button className = "navbar-toggler" data-target = "#navbaropen" data-toggle="collapse"style = {textColor}>
      Open
    
    </Button>

    <div className = "collapse navbar-collapse" id = "navbaropen">
        <ul className = "navbar-nav ml-auto">
            <li className = "nav-item">
                <a href = "#" className = "nav-link">
                <p className = "lead" style = {textColor}>Homepage</p>
                 </a>
            </li>
            <li className = "nav-item">
                <a href = "#" className = "nav-link"><p className = "lead" style = {textColor}>Teams</p></a>
            </li>
            <li className = "nav-item">
                <a href = "#" className = "nav-link"><p className = "lead" style = {textColor}>Seasons</p></a>
            </li>
            <li className = "nav-item">
                <a href = "#" className = "nav-link"><p className = "lead" style = {textColor}>Leaders</p></a>
            </li>
        </ul>
     </div>       


</div>
      
     
    );
}

export default NavbarPage