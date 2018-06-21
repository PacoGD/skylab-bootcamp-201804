import React, { Component } from 'react';
import api from 'api';
import Xtorage from '../xtorage'


class Profile extends Component {
    state = {
        password: "",
        email: "",
        newpassword: ""
    }
    componentDidMount() {
        if (!(Xtorage.local.get('user'))) {
            this.props.history.push(`/login`)
        }
    }
    delete = (e) => {
        e.preventDefault()
        api.unregisterUser(this.state.email, this.state.password, Xtorage.local.get('user'))
            .then(res => {
                if (res.status === 'OK') {
                    Xtorage.local.remove('user')
                }
            })
            .then(() => {
                this.props.history.push(`/`)
            })
            .catch(error => {
                window.alert("Wrong credentials!");
                console.error(error)
                this.props.history.push(`/profile`)

            })
    }
    inputValues = (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }
    render() {
        return (
            <div>
                <div className="MyOrders">
                    <h1>My orders</h1>
                    <p>No orders yet</p>
                </div>
                <div className="Unregister">
                    <h1>Unregister</h1>
                    <form onSubmit={this.delete}>
                        <input type="email" name="email" placeholder="email" onChange={this.inputValues} />
                        <input type="password" name="password" placeholder="password" onChange={this.inputValues} />
                        <button type="submit">Delete</button>
                    </form>
                </div>
                <div className="UpdatePassword">
                    <h1>Update Password</h1>
                    <form >
                        <input type="email" name="email" placeholder="email" onChange={this.inputValues} />
                        <input type="password" name="password" placeholder="password" onChange={this.inputValues} />
                        <input type="password" name="newpassword" placeholder="New password" onChange={this.inputValues} />
                        <button type="submit">Update</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Profile