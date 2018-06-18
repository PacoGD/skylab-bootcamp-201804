import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home/Home.js'
import Footer from './components/Footer';
import './vendor/bootstrap/4.1.0/css/bootstrap.min.css'

import './App.css';

class App extends Component {

  state = {
    url: '',
    token: '',
    username: '',
    password: '',
    id: ''
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer />

      </div>
    );
  }
}

export default App;

