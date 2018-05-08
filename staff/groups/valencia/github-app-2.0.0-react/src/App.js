import React, { Component } from 'react';
import logic from './logic/index'
import './App.css';
import UserList from './components/UserList'
import UserInfo from './components/UserInfo'
import Search from './components/Search'

class App extends Component {
  state = {
    userGitHub: "",
    dataUsers: [],
    selectedUser: {},
    err: {}
  }

  catchInput = e => {
    this.state.input = e.target
    this.setState({
      userGitHub: e.target.value   
    })
  }
  
  catchOutput = e => {
    e.preventDefault()
    this.state.selectedUser = {}
    logic.searchUsers(this.state.userGitHub)
    .then(data => this.setState({
      dataUsers: data,
      userGitHub: ""
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
          <Search input={this.catchInput} form={this.catchOutput} value={this.state.userGitHub}/>
        <main>
          <UserList listuser={this.state.dataUsers} show={this.showInfo} />
          <UserInfo infor={this.state.selectedUser}/>
        </main>
      </div>
    );
  }
}
export default App;