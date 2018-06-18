import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from 'api';

api.url = 'http://localhost:5000/api'

class App extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    username: "",
    email: ""
}
inputValues = (e) => {
    let prop = e.target.name
    this.setState({ [prop]: e.target.value })
}

submit = (e) => {
    e.preventDefault()
    api.registerUser(this.state.username, this.state.name, this.state.surname, this.state.email, this.state.password)
        .then(() => {
            console.log('registrado!')
        })

}
  render() {
    return (
      <div className="Register">    
                <h1>Register</h1>
                <form onSubmit={this.submit}>
                    <input type="text" name="username" placeholder="username" onChange={this.inputValues} />
                    <input type="password" name="password" placeholder="password" onChange={this.inputValues} />
                    <input type="email" name="email" placeholder="email" onChange={this.inputValues} />
                    <input type="text" name="name" placeholder="name" onChange={this.inputValues} />
                    <input type="text" name="surname" placeholder="surname" onChange={this.inputValues} />
                    <button type="submit">Register</button>
                </form>         
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import api from 'api';

// api.url = 'http://localhost:5000/api'

// class App extends Component {
//   state = {
//     username: "",
//     password: "",
//     name: "",
//     username: "",
//     email: ""
// }
// inputValues = (e) => {
//     let prop = e.target.name
//     this.setState({ [prop]: e.target.value })
// }

// submit = (e) => {
//     e.preventDefault()
//     api.registerUser(this.state.username, this.state.name, this.state.surname, this.state.email, this.state.password)
//         .then(() => {
//             console.log('registrado!')
//         })

// }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
      
//                 <h1>Register</h1>
//                 <form onSubmit={this.submit}>

//                     <input type="text" name="username" placeholder="username" onChange={this.inputValues} />
//                     <input type="password" name="password" placeholder="password" onChange={this.inputValues} />
//                     <input type="email" name="email" placeholder="email" onChange={this.inputValues} />
//                     <input type="text" name="name" placeholder="name" onChange={this.inputValues} />
//                     <input type="text" name="surname" placeholder="surname" onChange={this.inputValues} />
//                     <button type="submit">Register</button>
//                 </form>
            
//       </div>
//     );
//   }
// }

// export default App;

