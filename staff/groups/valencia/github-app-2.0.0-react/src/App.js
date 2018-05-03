import React, { Component } from 'react';
import logic from './logic/index'
import './App.css';
import UserList from './components/UserList'
import UserInfo from './components/UserInfo'

class App extends Component {
  state = {
    userGitHub: "",
    dataUsers: [],
    selectedUser: {},
    err: {}
  }
  catchInput = e => {
    this.setState({
      userGitHub: e.target.value
    })
  }
  catchOutput = e => {
    e.preventDefault()
    logic.searchUsers(this.state.userGitHub)
      .then(data => this.setState({
        dataUsers: data
      }))
  }
  showInfo = userLogin => {
    logic.retrieveUser(userLogin).then(data => this.setState({
      selectedUser: data
    })
    )
  }
  render() {
    return (
      <div className="App">
        <header><h1>FindinGitHub</h1></header>
        <form>
          <input type="text" placeholder="Search github username" onChange={this.catchInput} />
          <button onClick={this.catchOutput}>Search</button>
        </form>
        <main>
          <UserList listuser={this.state.dataUsers} show={this.showInfo} />
          <UserInfo infor={this.state.selectedUser}/>
        </main>
      </div>
    );
  }
}
export default App;