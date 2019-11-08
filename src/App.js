import React, {useState} from "react";
import "./App.css";
import PodDisplay from './components/APOD/PodDisplay'
import Rover from './components/Insight/Rover'
import { Button } from 'reactstrap';

function App() {
  const [showPodDiv, setShowPodDiv] = useState(false);
  const [showRoverDiv, setShowRoverDiv] = useState(false);
  
  return (
    <div className="App">
      <div>
        <h1>Welcome to my NASA API Project!</h1>
        <Button onClick={() => setShowPodDiv(!showPodDiv)} color="primary" size="lg" block>Astronomy Picture of the Day</Button>
        {showPodDiv && <div className="PodDisplay"><PodDisplay /></div>}
        <Button onClick={() => setShowRoverDiv(!showRoverDiv)} color="secondary" size="lg" block>View Photos of Mars from Surface Rovers</Button>
        {showRoverDiv && <div className="Rover"><Rover /></div>}
      </div>
    </div>
  );
}

export default App;