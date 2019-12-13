import React from 'react';


import Title from './components/Title';

import Main from './components/Main';

import CompareTwo from './components/CompareTwo';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Introduction from './components/Introduction';
import CompareOne from './components/CompareOne';
import TitleVid from './components/TitleVid';
import Footer from './components/Footer';


function App() {

  

 
  return (
    
    <div className="App " >


    
    <HashRouter>
      <Switch>
      <Route exact from ={"/"} component = {TitleVid}></Route>
      <Route path = {"/home"} component = {Main}></Route> 
      <Route path = {"/twoplayers"} component = {CompareTwo}></Route>  
      <Route path = {"/introduction"} component = {Introduction}></Route> 
      <Route path = {"/oneplayer"} component = {CompareOne}></Route>
      
      </Switch>
      </HashRouter>
    
 
   
    </div>
  );
}

export default App;
