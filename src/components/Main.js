import React, {Component} from 'react';
import NavbarPage from './NavbarPage';
import Introduction from './Introduction';
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