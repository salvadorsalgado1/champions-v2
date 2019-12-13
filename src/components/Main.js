import React, {Component} from 'react';
import NavbarPage from './NavbarPage';
import TitleVid from './TitleVid';
import Introduction from './Introduction';
import videoPage from './videoPage';
import Results from './Results';
import Footer from './Footer';


export class Main extends Component
{
    render(){
     
    return(
        <div className = "Main">
           <NavbarPage/>
           
           <Introduction/>
           
             
    
        </div>
    )
}
}

export default Main