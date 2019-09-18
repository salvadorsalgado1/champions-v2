import React, {Component} from 'react';
import NavbarPage from './NavbarPage';
import Title from './Title';
import Stats from './Stats';
import CompareCont from './CompareCont';

const height = {
    height:"100vh"
}
const paddingT = {
    paddingTop:"100px"
}
export class Main extends Component
{
    render(){
     
    return(
        <div className = "Main" style = {height}>
            <NavbarPage/>
            <CompareCont/>
        
        
        </div>
    )
}
}

export default Main