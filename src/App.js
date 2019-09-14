import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats';
import {Button} from "react-bootstrap";
import Main from './components/Main';
import {HashRouter, Router, Route, Link, Switch} from 'react-router-dom';

function App() {
 
  return (
    
    <div className="App" >
    
    <HashRouter>
     

     {/* 
      <Route path = {"/login"} component = {Login}></Route>*/}
      <Switch>
      <Route exact from ={"/"} component = {Title}></Route>
      
      <Route path = {"/stats"} component = {Stats}></Route>
  
               
      </Switch>
      
         
           
          
       </HashRouter>
       
       
    
    </div>
  );
}

export default App;
