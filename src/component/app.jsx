
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
    <div className="l-app">
      <header>
        <nav className="l-content">
          <ul className="navbar">
            <li className="navbar__option">
              <Link to="/" className="navbar__link navbar__link--home">Covfefe</Link>
            </li>
            <li className="navbar__option">
              <Link to="/story" className="navbar__link navbar__link--small">What</Link>
            </li>
            <li className="navbar__option">
              <Link to="/uses" className="navbar__link navbar__link--small">Why</Link>
            </li>
            <li className="navbar__option">
              <Link to="/help" className="navbar__link navbar__link--small">How</Link>
            </li>
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

      <div className="l-spacer" />

      <footer>
        <div className="l-content">
          <p>Covfefe</p>
          <span>&copy; 2017 Daniel Teo</span>
          <a className="link float"
             href="https://github.com/takuyakanbr/covfefe"
             target="_blank"
             rel='noreferrer noopener'>View on Github</a>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
