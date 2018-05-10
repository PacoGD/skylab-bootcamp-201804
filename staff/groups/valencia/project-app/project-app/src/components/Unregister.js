import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom'
// import App from '../App'
import logic from '../logic/index'
import Xtorage from './Xtorage'
import swal from 'sweetalert2'


class Unregister extends Component {
    state = {
        user: '',
        password: '',
        state: '',
        token: ''
    }
    userName = (e) => {
        const user = e.target.value
        this.setState({ user })
    }
    userPassword = (e) => {

        const password = e.target.value
        this.setState({ password })
    }
    submit = (e) => {
        e.preventDefault()

        /* logic.unregister(this.state.user, this.state.password)
            .then(res => {
                Xtorage.local.get('user').token o .id
            }) */
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })
            .then((result) => {
                if (result.value) {
                    logic.unregister(this.state.user, this.state.password)
                        .then(res => {
                            if (res.status === 'OK') {
                                Xtorage.local.remove('user')
                                swal(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                // this.props.history.push(`/register`)
                            } else {
                                swal(
                                    'Error!',
                                    'Wrong username or password.',
                                    'warning'
                                )
                                // this.props.history.push(`/unregister`)
                            }
                        }).then(this.bucle)
                }
            })

    }
    bucle = () => {
        if (!Xtorage.local.get('user')) {
            console.log(Xtorage.local.get('user'))
            this.props.history.push(`/register`)
        }else{
            console.log("no")
            this.props.history.push(`/unregister`)
        }
    }
    render() {
        const { user, password } = this.state
        return <div className="unregister">
            <h1>Delete User</h1>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" />

                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    }
}

export default withRouter(Unregister)
