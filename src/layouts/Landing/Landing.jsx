import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
          There will be landing page.<br />
          <Link to="/dashboard">Dashboard's here</Link>
        </h1>
      </div>
    );
  }
}

export default Landing;
