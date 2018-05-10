import React, { Component } from 'react';
// import '../App.css';
// import App from '../App'
import logic from '../logic'
// import Unregister from './Unregister'
import Xtorage from './Xtorage';

class Profile extends Component {
    state = {
        data: {},
        username: "",
        name: "",
        country: "",
        email: ""
    }

    componentDidMount() {
        if (Xtorage.local.get('user')) {
            logic.token = Xtorage.local.get('user').token
            logic.id = Xtorage.local.get('user').id
            logic.retrieve()
                .then(res => {
                    if (res.status === "KO") {
                        Xtorage.local.remove('user')
                        throw Error("Time expired and you should log in again")
                    }
                    return res.data})
                .then(data => {
                    this.setState({
                        data,
                        username: data.username,
                        name : data.name,
                        country : data.country,
                        email : data.email
                    }) 
                })
                .catch(err => {
                    console.log(err)
                    this.props.history.push(`/login`)
                })
        } else  this.props.history.push(`/login`)
    }

    submit = (e) => {
        e.preventDefault()
        this.props.history.push(`/unregister`)
    }
    inputName = (e) => {
        this.setState({ name: e.target.value })

    }
    inputEmail = (e) => {
        this.setState({ email: e.target.value })

    }
    inputCountry = (e) => {
        this.setState({ country: e.target.value })

    }
    submitUpdate = (e) => {
        e.preventDefault()
        const enterPassword = prompt('Introduce password to update')
        let data = {
            password: enterPassword,
            username: this.state.username,
            name: this.state.name,
            country: this.state.country,
            email: this.state.email
        }
        logic.update(data)
    }
    _handleUnlog = (e) => {
        e.preventDefault()
        Xtorage.local.remove('user')
        this.props.history.push(`/login`)
    }
    render() {
        return (
            <div className="Profile">
                <section className="pf-profile">
                    <h1>Profile</h1>
                    <article className="info">
                        {/* <figure>
                            <input type="image" id="profile_pic" src="images/transp.png" alt="picture" />
                            <p>Upload Picture</p>
                            <input type="file" id="load_file" />
                        </figure> */}

                        <div>
                            {/* <div className="half-input">Username:</div> */}
                        </div>
                        <form onSubmit={this.submitUpdate}>
                            <div className="register-div">
                                <input type="text" value={this.state.username} placeholder="username" id="username" readOnly/>
                                <label htmlFor="username" className="static-value">Username </label>
                            </div>
                            <div className="register-div">
                                <input type="text" onChange={this.inputName} value={this.state.name} id="name" placeholder="name" autoComplete="off"/>
                                <label htmlFor="name" className="static-value">Name </label>
                            </div>
                            <div className="register-div">
                                <input type="email" onChange={this.inputEmail} value={this.state.email} id="email" placeholder="email" autoComplete="off"/>
                                <label htmlFor="email" className="static-value">E-mail </label>
                            </div>
                            <div className="register-div">
                                <input type="text" onChange={this.inputCountry} value={this.state.country} id="country" placeholder="country"  autoComplete="off"/>
                                <label htmlFor="country" className="static-value">Country </label>
                            </div>
                            <div className="register-buttons">
                                <button>Update</button>
                                <button onClick={this.submit}>Delete Profile</button>
                                <button onClick={this._handleUnlog}>Log out</button>
                            </div>
                        </form>

                    </article>
                </section>
            </div >
        )
    }
}

export default Profile

