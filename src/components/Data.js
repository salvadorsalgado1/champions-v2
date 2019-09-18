import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import APIClient from './APIClient';
import CompareOne from './CompareOne';

class Data extends Component {
  constructor(props) {
   super(props);

let FirstPlayer = 'Kobe Bryant';
let SecondPlayer = 'Dwyane Wade';

   this.state = {
     player:{
         player_name: SecondPlayer,
        
     },
     players:null,
     
     
   };
 }

 componentDidMount(state){
     
   this.APIClient  = new APIClient();
 
   this.APIClient.getPlayer(this.state.player).then((data) =>
   this.setState({state, players:data})) 
  
 };

 render() {
   if(this.state.players == null)
   {
     return null;
   }
   
   console.log(this.state.players);
   return(
     <div>
       
    <CompareOne

    Name = {this.state.players.player_name}
    Season = {this.state.players.first_nba_season}
    Position = {this.state.players.positions}
    Assists = {this.state.players.assists}
    Blocks = {this.state.players.blocks}
   /*Begin Nested */
    fieldGoalAtt = {this.state.players.shooting.field_goal_attempted}
    fieldGoalMade = {this.state.players.shooting.field_goal_made}
    fieldGoalPercent = {this.state.players.shooting.field_goal_pct*100}
    freeThrowAttempt = {this.state.players.shooting.free_throw_attempted}
    freeThrowMade = {this.state.players.shooting.free_throw_made}

    freeThrowPct = {this.state.players.shooting.free_throw_pct*100}
    PPG = {this.state.players.shooting.points}
    ThreePointersAttempted = {this.state.players.shooting.three_pt_attempted}
    ThreePointersMade = {this.state.players.shooting.three_pt_made}
    ThreePointersPct = {this.state.players.shooting.three_pt_pct*100}
    trueSTGPct = {this.state.players.shooting.true_stg_pct*100}
    /*End Nested*/
    defReb = {this.state.players.def_reb}
    offReb = {this.state.players.off_reb}
    totReb = {this.state.players.tot_reb}
    turnOvers = {this.state.players.turnovers}
    steals = {this.state.players.steals}
    
    />

     </div>
   );
 }

 

 
 
}

export default Data;