
import React from 'react';
import { Link } from 'react-router-dom';
import Page from './page';
import '../img/covfefe-tweet.png';
import '../img/caught-tweet.png';

const StoryPage = () => (
  <Page>
    <h1>What&#39;s the story?</h1>
    <h3>Dawn of a new word</h3>
    <p>
      On 31st May 2017, our great dictator Donald J. Trump tweeted
      &quot;Despite the constant negative press convfefe&quot;.
    </p>
    <figure>
      <img src="covfefe-tweet.png" alt="Despite the constant negative press convfefe"/>
      <figcaption>The tweet that started it all.</figcaption>
    </figure>
    <p>
      What was He trying to tell us? What was He trying to expose?
      Unfortunately, we will never get to find out.
    </p>
    <p>
      The tweet stayed up for a mere 6 hours, before being replaced by
      another tweet &quot;Who can figure out the true meaning of
      covfefe??? Enjoy!&quot;
    </p>
    <figure>
      <img src="caught-tweet.png" alt="Who can figure out the true meaning of
      covfefe??? Enjoy!"/>
      <figcaption>See, it&#39;s all part of His plan!</figcaption>
    </figure>
    <p>
      Whatever conspiracy He was trying to expose, clearly the
      conspirators got to Him first, before He could finish His sentence.
    </p>
    <h3>You can, too!</h3>
    <p>
      While we mourn His untimely demise, let us not forget His bravery,
      and His valient efforts to expose this conspiracy.
    </p>
    <p>
      In honor of His Excellency Donald Trump, we&#39;ve constructed
      Covfefe so that you can follow after His pioneering footsteps.
    </p>
    <p>
      Paying homage to the origins of the word &quot;covfefe&quot;,
      Covfefe allows you to generate your own random nonsensical and
      gibberish words, exactly as Trump intended, and exactly as Trump did.
    </p>
    <p className="nav-next-page"><Link to="/uses" className="link">Why should you care?</Link></p>
  </Page>
);

export default StoryPage;
