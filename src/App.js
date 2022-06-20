import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
// import { useState, useEffect } from 'react';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import YoutubeSearch from './views/YoutubeSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => { 

  const onTimesup = () => {
    // alert('times up')
  }
  //re-render
  //for for-each => map
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimesup={onTimesup} />
            <span>---------------------</span>
            <NewCountDown onTimesup={onTimesup} />
          
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/blog/:id">
            <DetailBlog />
          </Route>

          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>

          <Route path="/search">
            <YoutubeSearch />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
