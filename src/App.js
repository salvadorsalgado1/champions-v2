import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Stats from './components/Stats';
import NavbarPage from './components/NavbarPage';
import {Button} from "react-bootstrap";
import Main from './components/Main';
import CompareOne from './components/CompareOne';
import CompareCont from './components/CompareCont';
import {HashRouter, Router, Route, Link, Switch} from 'react-router-dom';
import APIClient from './components/APIClient';
import Data from './components/Data';

function App() {
  
 
   
  return (
    
    <div className="App" >

    
    
    <HashRouter>
      <Switch>
      <Route exact from ={"/"} component = {Title}></Route>
      <Route path = {"/main"} component = {Main}></Route> 
      <Route path = {"/comparecont"} component = {CompareCont}></Route>   
      </Switch>
      </HashRouter>
    
   
   
    </div>
  );
}

export default App;
