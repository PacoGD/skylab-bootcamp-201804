import React, { Component } from 'react';
import '../App.css';
import App from '../App'
import logic from '../logic'

function Profile() {

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
                        <div>
                            <label for="username">Username:</label>
                            <span type="text" name={logic.username} />
                        </div>
                        <div>

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
                            <label for="card">Card Numer:</label>
                            <span type="text" name="card" />
                        </div>
                        <div>
                            <label for="password">Password:</label>
                            <span type="password" name="password" />
                        </div>
                        <div>
                            <label for="repeat">Repeat Password:</label>
                            <span type="password" name="repeat" />
                        </div>
                        <div>
                            <span type="button" id="register-button" value="REGISTER" />
                            <span type="button" id="cancel" value="CANCEL" />
                        </div>
                    </form>
                </article>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, molestiae repudiandae repellat suscipit cupiditate eligendi inventore officia praesentium labore est aliquam sint natus quam voluptate vel maiores tenetur amet! Consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde facere, fuga nihil magnam maiores amet, dignissimos voluptas quasi voluptates reprehenderit quidem consequuntur esse velit nobis est veniam fugit quaerat ex.</article>
            </section>
        </div >
    )

}

export default Profile