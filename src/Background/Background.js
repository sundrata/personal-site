import React, { Component } from 'react';
import '../App/App.css';
const bgd  = require('./bgd.jpg');
class Body extends Component { 
  render() {
    return (
      <div className="App">
        <img  src={bgd} />
      </div>
    );
  }
}

export default Body;