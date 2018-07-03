import React, { Component } from 'react';
import Main from './components/main'
import Footer from './components/footer';
import Header from './components/header'
// import './vendor/bootstrap/4.1.0/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  state = {
    url: '',
    token: '',
    username: '',
    password: '',
    id: '',
    cart: 'alcachofas'
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Main />
        {/* <Footer /> */}

      </div>
    );
  }
}

export default App;

