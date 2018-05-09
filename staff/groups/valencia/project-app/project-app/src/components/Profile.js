import React, { Component } from 'react';
// import '../App.css';
// import App from '../App'
import logic from '../logic'
// import Unregister from './Unregister'
import Xtorage from './Xtorage';
import swal from 'sweetalert2'

class Profile extends Component {
    state = {
        data: {},
        name: "",
        country: "",
        email: ""
    }

    componentWillMount() {
        if (Xtorage.local.get('user')) {
            logic.token = Xtorage.local.get('user').token
            logic.id = Xtorage.local.get('user').id
            logic.retrieve()
                .then(res => res.data)
                .then(data => {
                    this.setState({
                        data
                    })
                })
        }
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
        const enterPassword=prompt('introduce password')
        // const {value: password} = await swal({
        //     title: 'Enter your password',
        //     input: 'password',
        //     inputPlaceholder: 'Enter your password',
        //     inputAttributes: {
        //       'maxlength': 10,
        //       'autocapitalize': 'off',
        //       'autocorrect': 'off'
        //     }})
        //   if (password === this.state.data.password) {
        //     logic.update(data)
        //   }
        let data = {
            password: enterPassword,
            username: this.state.data.username,
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
                            <label name="username">Username:</label>
                            {/* <span>{this.state.data.username}</span> */}
                        </div>
                        <form onSubmit={this.submitUpdate}>
                            <input type="text" placeholder="name" value={this.state.name} id="name" onChange={this.inputName} />
                            <input type="email" placeholder="email" value={this.state.email} id="email" onChange={this.inputEmail} />
                            <input type="text" placeholder="country" value={this.state.country} id="country" onChange={this.inputCountry} />
                            <button>Update</button>
                        </form>
                        <button onClick={this.submit}>Delete Profile</button>
                        <button onClick={this._handleUnlog}>Log out</button>

                    </article>
                </section>
            </div >
        )
    }
}

export default Profile

