
import React from 'react';
import { Link } from 'react-router-dom';
import Page from './page';

const NotFoundPage = ({ location }) => (
  <Page>
    <h1>404 - Not Found</h1>
    <p>The requested page <code>{ location.pathname }</code> was not found.</p>
    <p><Link to="/" className="link">Return to homepage.</Link></p>
  </Page>
);

export default NotFoundPage;
