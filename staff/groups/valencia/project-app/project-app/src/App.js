import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Register from './components/Register'
import Login from './components/Login'

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

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

        <header>
          <h1>I'M A HEADER</h1>

        </header>
        <main>
          <h2>WELCOME</h2>
        </main>
        <footer>
          <h4>I am a footer</h4>
        </footer>
      </div>
    );
  }
}

export default App;
