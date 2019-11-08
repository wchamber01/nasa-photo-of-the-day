import React from "react";
import "./App.css";
import PodDisplay from './components/APOD/PodDisplay'
import Rover from './components/Insight/Rover'
import { Button } from 'reactstrap';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Welcome to my NASA API Project!</h1>
        <Button color="primary" size="lg" block>Astronomy Picture of the Day</Button>
        <div className="PodDisplay"><PodDisplay /></div>
        <Button color="secondary" size="lg" block>View Photos of Mars from Surface Rovers</Button>
        <div className="Rover"><Rover /></div>
        
      </div>
    </div>
  );
}

export default App;