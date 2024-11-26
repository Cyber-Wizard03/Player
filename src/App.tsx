import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { VideoPlayer } from './components/Player';


function App() {
  return (
    <div className="App">
   <VideoPlayer Video={window.location.origin + "/1.mp4"}/>
    </div>
  );
}

export default App;
