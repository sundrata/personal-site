import React, { Component } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
