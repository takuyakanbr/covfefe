
import React from 'react';

class Page extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <article className="page">
        { this.props.children }
      </article>
    );
  }
}

export default Page;
