
const logic = {
    url: 'https://api.github.com',
    token: 'a686e826ad3ffd8c4e97d18fb5058b3466f88ed4',
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

