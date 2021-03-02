import React from 'react';
import NavbarPage from './NavbarPage';
import Data from './Data';
const cardSize = {width:"100%",
boxShadow:"5px 5px 5px black",}
const paddingT = {
    paddingTop:"105px",  
}

function CompareOne(props)
{
    return(
        <div className = "Main CompareOne" style = {paddingT}>
            <NavbarPage/>

                <div >
                    <div>
                        <div>
                            <div style = {cardSize} >
                                <div>
                                    <Data/>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CompareOne