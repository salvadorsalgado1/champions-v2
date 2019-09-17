import React, {Component} from 'react';
import NavbarPage from './NavbarPage';
import Title from './Title';
import Stats from './Stats';

const height = {
    height:"100vh"
}

export class Main extends Component
{
    render(){
        
    
    return(
        
       
    <div>
        {this.props.children}

    </div>
       
    )
}
}

export default Main