import React from 'react';
import NavbarPage from './NavbarPage';
import Title from './Title';
import Stats from './Stats';

const height = {
    height:"100vh"
}

function Main()
{
    return(
        <div className = "Main" style = {height} >
       
         <Stats/>
        </div>
    )
}

export default Main