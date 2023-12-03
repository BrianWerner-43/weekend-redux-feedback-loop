import React from 'react';
import './App.css';
import Feeling from './Feeling/Feeling.jsx';
import Understanding from './Understanding/Understanding.jsx';
import Supported from './Suppoeted/Suppoeted.jsx';
import Comments from './Comments/Comments.jsx';
import Review from './Review/Review.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';



function App() {

return (
<div className='App'>
<Router>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
  <Route exact path="/">
    <Feeling />
  </Route>
  <Route exact path="/understanding">
    <Understanding />
  </Route>
  <Route exact path="/supported">
    <Supported />
  </Route>
  <Route exact path="/comments">
    <Comments />
  </Route>
  <Route exact path="/review">
    <Review />
  </Route>
  <Route exact path="/thankYou">
    <ThankYou />
  </Route>
</Router>
  </div>
);
}

export default App;
