import React, {Component} from 'react';
import NavbarPage from './NavbarPage';

import Introduction from './Introduction';
const height = {
    height:"100vh"
}

export class Main extends Component
{
    render(){
     
    return(
        <div className = "Main" style = {height}>
            <NavbarPage/>
            <Introduction/>
        
        
        </div>
    )
}
}

export default Main