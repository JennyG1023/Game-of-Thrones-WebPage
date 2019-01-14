import React, { Component } from 'react';
import Router from './Router';
import Nav from './views/nav';


class App extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to GoT!</h3>
        <Nav />
        <Router />
      </div>
    )
  }
}

export default App;