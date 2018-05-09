import React, { Component } from 'react';
import '../App.css';
import App from '../App'
import logic from '../logic'

class Profile extends Component {

    state = {
        username: 'toni',
        profilePassword: '123',
        newPassword: '',
        email: '',
        property: '',
        value: '',
        token: sessionStorage.getItem('key')
    }


    nameUser = (e) => {
        e.preventDefault()
        this.state.username = e.target.value
    }
    _password = (e) => {
        e.preventDefault()
        this.state.profilePassword = e.target.value
    }

    _newPassword = (e) => {
        e.preventDefault()
        this.state.newPassword = e.target.value
    }

    emailUser = (e) => {
        e.preventDefault()
        this.state.email = e.target.value
    }

    render() {
        return (
            <div className="Profile">
                <section className="pf-profile">
                    <h1>Profile</h1>
                    <article className="info">
                        <figure>
                            <input type="image" id="profile_pic" src="images/transp.png" alt="picture" />
                            <p>Upload Picture</p>
                            <input type="file" id="load_file" />
                        </figure>
                        <form>
                            <p type="text" placeholder="user name" id="user_name">{logic.username} </p>
                            <p type="email" name="email" placeholder="user@email.com" id="user-email" onChange={this.emailUser} />
                            <p type="password" placeholder="current password" id="password" onChange={this.profilePassword} />
                            <p type="password" name="password" placeholder="new password" id="newPassword" onChange={this.newPassword} />
                            <button onSubmit={() => logic.update(this.state.username, this.state.profilePassword, this.state.emailUser, this.state.newPassword)}>Accept Changes</button>
                        </form>
                    </article>
                    <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, molestiae repudiandae repellat suscipit cupiditate eligendi inventore officia praesentium labore est aliquam sint natus quam voluptate vel maiores tenetur amet! Consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde facere, fuga nihil magnam maiores amet, dignissimos voluptas quasi voluptates reprehenderit quidem consequuntur esse velit nobis est veniam fugit quaerat ex.</article>
                </section>
            </div >
        )
    }
}

export default Profile