import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import APIClient from './APIClient';

class Data extends Component {
  constructor(props) {
   super(props);

   this.state = {
     player:{
         player_name: 'Kobe Bryant'
     },
     players:[]
   };

  
 }
/*
 componentDidMount(){
    axios.get('/player?player_name:Kobe Bryant').then(res =>{console.log(res)})

}
 }
*/



 componentDidMount(state){
     
   this.APIClient  = new APIClient();

  
  //this.setState({player_name:Player.Data})
 

   this.APIClient.getPlayer(this.state.player).then((data) =>
   this.setState({state, players:data})) 
  
 };


 render() {
   console.log(this.state.players);
   return(
     <div>
       
    <h1>dregolego</h1>
    
    
        <h1>assists: {this.state.players.assists}   </h1>
        <h1>Blocks:{this.state.players.blocks}</h1>
        <h1>Defensive Rebounds:{this.state.players.def_reb}</h1>
        <h1>First NBA Season{this.state.players.first_nba_season}</h1>
     </div>
   );
 }

 

 
 
}

export default Data;