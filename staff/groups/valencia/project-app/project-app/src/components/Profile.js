import React, { Component } from 'react';
import '../App.css';
import App from '../App'
import logic from '../logic'
import Unregister from './Unregister'

class Profile extends Component {
    state = {
        data: {}
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
                        <form>
                            <div>
                                <button name="unregister" onClick={()=> Unregister(this.data.username, this.data.password)}>Delete profile</button>
                            </div>
                            {/* <div>

                            <label for="name">Name:</label>
                            <span type="text" name="name" />
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <span type="text" name="email" />
                        </div>
                        <div>
                            <label for="phone">Phone Number:</label>
                            <span type="text" name="phone" />
                        </div>

                       
                        <div>
                            <span type="button" id="register-button" value="REGISTER" />
                            <span type="button" id="cancel" value="CANCEL" />
                        </div> */}
                        </form>
                    </article>

                </section>
            </div >
        )
    }
}

export default Profile

