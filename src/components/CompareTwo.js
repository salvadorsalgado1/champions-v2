import React from 'react';
import Data from './Data';
import NavbarPage from './NavbarPage';
import Data2 from './Data2';
const shadow = {boxShadow:"5px 5px 5px black"}
function CompareTwo(props)
{
    return(
        <div className = "Main"  >
            <NavbarPage/>
                <div className="container mt-5 mb-4">
                    <div className="row mb-4">
                        <div className="col">
                            <div style={shadow} className = "card lead">
                                <div className="card-body">
                                    <Data/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="col">
                            <div style={shadow} className="lead">
                            <div className="card-body">
                                    <Data2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CompareTwo