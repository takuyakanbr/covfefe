
import React from 'react';
import { Link } from 'react-router-dom';
import Page from './page';

const HelpPage = () => (
  <Page>
    <h1>How do I use this?</h1>
    <h3>Generate</h3>
    <p>
      Just press the <strong>Generate</strong> button and Covfefe will create 18
      new words for you! It&#39;s really that simple!
    </p>
    <h3>Options</h3>
    <p>
      In case you&#39;re not satisfied with the defaults, press
      the <strong>Options</strong> button to choose the types of output you want.
    </p>
    <ul>
      <li>
        <strong>Generated words</strong> is a type of output built up by alternating
        groups of consonants and vowels. Each group consists of up to 3 letters.
      </li>
      <li>
        <strong>Combined words</strong> is a type of output built up by combining
        multiple word fragments, sometimes with a vowel group in between them.
      </li>
      <li>
        <strong>More covfefe</strong> is a type of output that mixes a fragment of
        &quot;covfefe&quot; with other groups or fragments.
      </li>
      <li>
        <strong>Append numbers</strong> modifies any selected output type to append
        between 1 and 3 numbers at the end.
      </li>
    </ul>
    <p className="nav-next-page"><Link to="/" className="link">Let&#39;s get started!</Link></p>
  </Page>
);

export default HelpPage;
