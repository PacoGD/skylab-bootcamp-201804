'use strict';

const logic = {
    url: 'https://skylabcoders.herokuapp.com/api',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjA2MDJlZDE2YTA2MDAxNGQ3YTMyOCIsImlhdCI6MTUyNTcwMjkzMCwiZXhwIjoxNTI1NzA2NTMwfQ.BY404DwnM1ei2RdWdKD859zeROWgX6lJMshsK5U7sxU',
    username: '',
    password: '',
    id: '5af0602ed16a060014d7a328',

    headers() {
        return { headers: { Authorization: `Bearer Token ${this.token}` } }
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
                return fetch(`${this.url}/user/5af0602ed16a060014d7a328`, {
                    method: 'DELETE',
                    body: JSON.stringify(data),
                    headers: new Headers({ 
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjA2MDJlZDE2YTA2MDAxNGQ3YTMyOCIsImlhdCI6MTUyNTcwMzM0MCwiZXhwIjoxNTI1NzA2OTQwfQ.lXsJI_3jLJf3dP7RNan4oFBDSWZY9wIDSZDaF4jVi6g`,
                        "content-Type": "application/json"})
                })
                    .then(res => res.json())
                    .then(res => { this.id = res.id; console.log(this.token); console.log(res.id); return res })
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