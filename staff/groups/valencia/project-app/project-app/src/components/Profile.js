import React, { Component } from 'react';
import '../App.css';
import App from '../App'
import logic from '../logic'

class Profile extends Component {
    state = {
        data: {},
        name: "",
        email: "",
        country: ""
    }

    componentWillMount() {
        logic.retrieve()
            .then(res => res.data)
            .then(data => {
                this.setState({
                    data
                })
            })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.history.push(`/unregister`)
    }
    submitUpdate = (e) => {
        e.preventDefault()
        console.log("Hola que hase")
    }
    inputName = (e) => {        
        this.setState({ name: e.target.value })
        console.log(this.state.name)
    }
    inputEmail = (e) => {        
        this.setState({ email: e.target.value })
        console.log(this.state.email)
    }
    inputCountry = (e) => {        
        this.setState({ country: e.target.value })
        console.log(this.state.country)
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
                            <span>{this.state.data.username}</span>
                        </div>
                        <form onSubmit={this.submitUpdate}>
                            <input type="text" placeholder="name" value={this.state.name} id="name" onChange={this.inputName}/>
                            <input type="text" placeholder="email" value={this.state.email} id="email"onChange={this.inputEmail}/>
                            <input type="text" placeholder="country" value={this.state.country} id="country" onChange={this.inputCountry}/>
                            <button>Update Profile</button>
                        </form>
                        <button onClick={this.submit}>Delete Profile</button>

                    </article>
                </section>
            </div >
        )
    }
}

export default Profile

