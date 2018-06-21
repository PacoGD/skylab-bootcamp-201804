import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from 'api';
import Xtorage from './components/xtorage';


api.token = function (token) {
    if (token) {
        Xtorage.local.set('token', token)
        return
    }

    return Xtorage.local.get('token')
}

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>,
    document.getElementById('root'));
