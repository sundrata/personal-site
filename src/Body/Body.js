import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import '../App/App.css';
const me = require('./me.png');
class Body extends Component {
  render() {
    return (
      <div className="body">
          <img id="me" src={me} />
          <p className="description">Welcome to my personal website!</p>
          <p className="description">Click any of the links below to find out more about myself and my work.</p>
          <Nav />
      </div>
    );
  }
}

export default Body;