
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from './register/register'
import Login from './login/login'
import Landing from './landing/landing'
import Items from './items/items'
import Tables from './tables/tables'

function Main(){

    
    return (
    <div className = "Main">
        <Switch>
            <Route exact path = '/'component={Landing}/>
            <Route path = '/register'component={Register}/>
            <Route path = '/login'component={Login}/>
            <Route path = '/tables'component={Tables}/>
            <Route path = '/items'component={Items}/>
            
        </Switch>
    </div>
    )
}

export default Main;