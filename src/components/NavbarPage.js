import React from 'react';
import {Link} from 'react-router-dom';
import navImage from '../images/logo_transparent2.png';
//import TitleVid from './TitleVid';

const textColor = {
color:"white",

}
const textSize = {
fontSize : "1.5rem",
color:"white"

}
const logoSize = {
    height:"60px"
}

function NavbarPage() {
    return(
        

 <div className = "navbar bg-dark navbar-expand-lg fixed-top py-0 text-center"> 



    <div>
        <p className = "lead" style = {textSize}>&nbsp;&nbsp;<Link to = "/"><img src={navImage} alt="images" style={logoSize}/></Link></p>
    </div>
    <div className = "navbar-toggler" variant = "secondary" data-target = "#navbaropen" data-toggle="collapse"style = {textColor}>
    <i className="fas fa-bars" area-hidden="true"></i>
    </div>
    <div className = "collapse navbar-collapse" id = "navbaropen">
        <ul className = "navbar-nav ml-auto">
                <li className = 'nav-item'>
                <Link to = '/' ><p className = "nav-link lead" style = {textColor}>Title</p></Link>
                </li>
            <li className = "nav-item">
             <p className = "nav-link lead" style = {textColor}>|</p>
            </li>
            <li className = "nav-item">
            <Link to = "/home" component = {'./Main.js'}>
                <p className = "nav-link lead" style = {textColor}>Home</p>
            </Link>
        </li>
        </ul>
     </div>      
</div>
    );
}

export default NavbarPage