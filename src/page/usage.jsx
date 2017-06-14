
import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from './base';

const UsagePage = () => (
  <BasePage>
    <h1>Why should I care?</h1>
    <h3>Name it, ship it</h3>
    <p>
      Need a new project or application name? Instead of racking your
      brains to come up with the perfect name, why not let Covfefe
      handle the thinking (or lack thereof) for you? Your time is
      better spent on more decadent activities.
    </p>
    <h3>Login me in</h3>
    <p>
      All the usernames you&#39;ve tried thus far were taken?
      Don&#39;t fret, Covfefe is here to help. Generate your own
      unique and personal username in a matter of seconds!
    </p>
    <h3>Money is everything</h3>
    <p>
      Sales are pummeling, shareholders are up in arms. What can
      you do to stop the downward spiral? With Covfefe, your next
      marketing buzzword can be the one that send your company
      into the Twitter trending list, and the customers straight
      to your online store.
    </p>
    <p className="pagination float"><Link to="/help" className="link">How to use Covfefe?</Link></p>
  </BasePage>
);

export default UsagePage;
