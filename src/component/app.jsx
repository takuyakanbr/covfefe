
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import MainPage from '../page/main';
import StoryPage from '../page/story';
import UsagePage from '../page/usage';
import HelpPage from '../page/help';
import NotFoundPage from '../page/notFound';

const App = () => (
  <Router>
    <div className="app">
      <header>
        <nav className="content">
          <ul className="nav-bar">
            <li className="nav-option nav-home"><Link to="/" className="home-link">Covfefe</Link></li>
            <li className="nav-option"><Link to="/story" className="link">What</Link></li>
            <li className="nav-option"><Link to="/uses" className="link">Why</Link></li>
            <li className="nav-option"><Link to="/help" className="link">How</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={ MainPage }/>
          <Route path="/story" component={ StoryPage }/>
          <Route path="/uses" component={ UsagePage }/>
          <Route path="/help" component={ HelpPage }/>
          <Route component={ NotFoundPage }/>
        </Switch>
      </main>

      <div className="spacer" />

      <footer>
        <div className="content">
          <p>Covfefe</p>
          <span>&copy; 2017 Daniel Teo</span>
          <a className="link link-github"
             href="https://github.com/takuyakanbr/covfefe"
             target="_blank"
             rel='noreferrer noopener'>View on Github</a>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
