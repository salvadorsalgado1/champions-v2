import React from 'react';

function StatRow(props)
{
    return(
         <tr>
        
            <th scope = "row">{props.num}</th>
            <th>{props.Name}</th>
            <th>{props.mName}</th>
            <th>{props.LName}</th>
            <th>{props.Pin}</th>
            <th>{props.Pointers}</th>
            <th>{props.Points}</th>
            <th>{props.TripleD}</th>
            <th>{props.PPG}</th>
            <th>{props.Win}</th>
            <th>{props.Years}</th>
        
        </tr>
                            
                                   
                               
       
    )
}

export default StatRow