
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import MainPage from './mainPage';
import StoryPage from './storyPage';
import UsagePage from './usagePage';
import NotFoundPage from './notFoundPage';

const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <div className="content">
          <ul className="nav-bar">
            <li className="nav-option nav-home"><Link to="/" className="home-link">Covfefe</Link></li>
            <li className="nav-option"><Link to="/story" className="link">Story</Link></li>
            <li className="nav-option"><Link to="/usage" className="link">Usage</Link></li>
          </ul>
        </div>
      </div>

      <div className="content main-content">
        <Switch>
          <Route exact path="/" component={ MainPage }/>
          <Route path="/story" component={ StoryPage }/>
          <Route path="/usage" component={ UsagePage }/>
          <Route component={ NotFoundPage }/>
        </Switch>
      </div>

      <div className="spacer" />

      <div className="footer">
        <div className="content">
          <p>Covfefe</p>
          <span>&copy; 2017 Daniel Teo</span>
          <a className="link link-github"
             href="https://github.com/takuyakanbr/covfefe"
             target="_blank"
             rel='noreferrer noopener'>View on Github</a>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
