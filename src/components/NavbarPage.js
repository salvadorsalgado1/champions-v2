import React from 'react';
import {NavbarBrand, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Title from './Title';
import Main from './Main';

const textColor = {
color:"white",

}


const textSize = {
fontSize : "1.5rem",
color:"white"

}


function NavbarPage() {
    return(

 <div className = "navbar bg-dark navbar-expand-lg fixed-top"> 
    <NavbarBrand>
        <p className = "lead" style = {textSize}>Champion</p>
    </NavbarBrand>

    <Button className = "navbar-toggler" data-target = "#navbaropen" data-toggle="collapse"style = {textColor}>
      Open
    </Button>
    <div className = "collapse navbar-collapse" id = "navbaropen">
        <ul className = "navbar-nav ml-auto">
                <li className = 'nav-item'>


                <Link to = '/' component = {'./Title.js'} >
                {/*'./Title.js' */}
                    <p className = "nav-link lead" style = {textColor}>Title</p>
                    
                    </Link>
                </li>



            <li className = "nav-item">

               <Link to = "/home" component = {'./Main.js'}>
              
                    <p className = "nav-link lead" style = {textColor}>Home</p>
                
                </Link>
               
            </li>
            <li className = "nav-item">
                <p className = "nav-link lead" style = {textColor}>Seasons</p>
            </li>
            <li className = "nav-item">
             <p className = "nav-link lead" style = {textColor}>Leaders</p>
            </li>
        </ul>
     </div>       


</div>
      
     
    );
}

export default NavbarPage