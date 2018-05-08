'use strict'

const logic = {
    url: 'https://api.github.com',
    token: "8c31673426a0dceffe7d722bf03584903ed72848",

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } }
    },

    searchUsers(query) {
        return fetch(`${this.url}/search/users?q=${query}`, this.headers())
            .then(resp => resp.json())
            .then(data => data.items)           
    },

    retrieveUser(username) {
        return fetch(`${this.url}/users/${username}`, this.headers())
            .then(resp => resp.json())           
    }
}

export default logic;