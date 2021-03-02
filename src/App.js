import React from 'react';
import Main from './components/Main';
//import CompareTwo from './components/CompareTwo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CompareOne from './components/CompareOne';
import TitleVid from './components/TitleVid';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*<Route path="/TitleVid"><TitleVid /></Route>
          <Route path="/home"><Main /></Route>
          <Route path="/twoplayers"><CompareTwo /></Route>*/}
          <Route path="/oneplayer"><CompareOne/></Route>
          <Route path="/"><TitleVid /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
