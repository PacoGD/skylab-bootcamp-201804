'use strict';

const logic = {
    url: 'https://skylabcoders.herokuapp.com/api',
    token: '',
    username: '',
    password: '',
    id: '',

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } }
    },

    register(username, password) {

        const data = {
            username,
            password
        }
        return Promise.resolve()
            .then(() => {
                if (typeof password !== 'string') throw Error("Invalid password, it should be a string")
                if (typeof username !== 'string') throw Error("Invalid username, it should be a string")

                return fetch(`${this.url}/user`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ "content-Type": "application/json" })
                })
                    .then(res => res.json())
                    .then(res => { this.id = res.id; console.log(res); console.log(res.id); return res })
            })
    },


    login(username, password) {
        const data = {
            username,
            password
        }
        return Promise.resolve()
            .then(() => {
                return fetch(`${this.url}/auth`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ "content-Type": "application/json" })
                })
                    .then(res => res.json())
                    .then(res => { this.token = res.token; return res })
            })
    },

    unregister(username, password) {

        const data = {
            username,
            password
        }
        return Promise.resolve()
            .then(() => {
                return fetch(`${this.url}/user/${this.id}`, {
                    method: 'DELETE',
                    body: JSON.stringify(data),
                    headers: new Headers({ "content-Type": "application/json", headers()})
                })
                    .then(res => res.json())
                    .then(res => { this.id = res.id; console.log(res); console.log(res.id); return res })
            })
    },

    // searchUsers(query) {
    //     return 
    //     fetch(`${this.url}/search/users?q=${query}`, this.headers())
    //         .then(resp => resp.json())
    //         .then(data => data.item)
    //         .catch(err)
    // },

    // retrieveUser(username) {
    //     fetch(`${this.url}/users/${username}`, this.headers())
    //         .then(resp => resp.json())
    //         .then(data)
    //         .catch(err)
    // }
}