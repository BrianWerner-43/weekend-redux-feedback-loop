import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from './Feeling/Feeling';
// import HashRouter as Router, Route, Link
// import sucess page and admin panel page

// Each form page should be in it's own route ex: <Route exact path="/">
// Refrence pizza parlor for linking pages

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
    </div>
  );
}

export default App;
