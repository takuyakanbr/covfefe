
import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from './base';

const NotFoundPage = ({ location }) => (
  <BasePage>
    <h1>404 - Not Found</h1>
    <p>The requested page <code>{ location.pathname }</code> was not found.</p>
    <p><Link to="/" className="link">Return to homepage.</Link></p>
  </BasePage>
);

export default NotFoundPage;
