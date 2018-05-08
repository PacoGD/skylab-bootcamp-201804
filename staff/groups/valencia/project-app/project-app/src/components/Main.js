import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Landing from './Landing'
import Profile from './Profile'

function Main(){
    return (
    <div className = "Main">
        <Switch>
            <Route exact path = '/'component={Landing}/>
            <Route path = '/register'component={Register}/>
            <Route path = '/login'component={Login}/>
            <Route path = '/profile'component={Profile}/>
            <Route path = '/home'component={Home}/>
        </Switch>
    </div>
    )
}

export default Main;