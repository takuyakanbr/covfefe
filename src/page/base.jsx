
import React from 'react';

// provides default functionality for pages;
// every page is wrapped by a BasePage
class BasePage extends React.Component {

  // scroll to top when page changes
  // (i.e. when a new BasePage is mounted)
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="l-page">
        { this.props.children }
      </div>
    );
  }
}

export default BasePage;
