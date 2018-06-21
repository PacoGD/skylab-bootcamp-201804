
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from './register/register'
import Login from './login/login'
import Landing from './landing/landing'
import Items from './items/items'
import Tables from './tables/tables'
import Chairs from './chairs/chairs'
import Sofa from './sofa/sofa'
import Cart from './cart/cart';
import Profile from './profile/profile';

function Main(){

    
    return (
    <div className = "Main">
        <Switch>
            <Route exact path = '/'component={Landing}/>
            <Route path = '/register'component={Register}/>
            <Route path = '/login'component={Login}/>
            <Route path = '/tables'component={Tables}/>
            <Route path = '/chairs'component={Chairs}/>
            <Route path = '/sofa'component={Sofa}/>
            <Route path = '/items'component={Items}/>
            <Route path = '/cart/:itemId' component={Cart}/>
            <Route path = '/profile' component={Profile}/>

            
        </Switch>
    </div>
    )
}

export default Main;