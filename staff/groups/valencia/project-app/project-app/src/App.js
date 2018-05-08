import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
// import Register from './components/Register'
// import Login from './components/Login'
import Main from './components/Main'


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
        <Main/>
        <Footer />

      </div>
    );
  }
}

export default App;
