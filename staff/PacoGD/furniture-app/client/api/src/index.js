'use strict'

const axios = require('axios')

const furnitureApi = {
    url: 'NO-URL',

    token(token){
        if(token){
            this._token = token
            return
        }
        return this._token
    },

    registerUser(username, name, surname, email, password) {
        return Promise.resolve()
            .then(() => {
                return axios.post(`${this.url}/users`, { username, name, surname, email, password })
            })
            .then(({ status, data }) => {
                if (status !== 201) throw Error(`unexpected response status ${status} (${data.status})`)

                return true
            })
            .catch(err => {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                if (err.response) {
                    const { response: { data: { error: message } } } = err

                    throw Error(message)
                } else throw err
            })
    },
    newItem(title, image, description, color, category, stock, price) {
        return Promise.resolve()
            .then(() => {
                return axios.post(`${this.url}/items`, { title, image, description, color, category, stock, price })
            })
            .then(({ status, data }) => {
                if (status !== 201) throw Error(`unexpected response status ${status} (${data.status})`)

                return true
            })
            .catch(err => {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                if (err.response) {
                    const { response: { data: { error: message } } } = err

                    throw Error(message)
                } else throw err
            })
    },
    login(email, password) {

        return Promise.resolve()
            .then(() => {
                return axios.post(`${this.url}/login`, { email, password })
                    .then(({ status, data }) => {
                        if (status !== 200) throw Error(`unexpected response status ${status} (${data.status})`)

                        const { data: { id, token } } = data

                        this.token(token)

                        return data
                    })
            })
            .catch(err => {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                if (err.response) {
                    const { response: { data: { error: message } } } = err

                    throw Error(message)
                } else throw err
            })
    },
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                return axios.get(`${this.url}/users/${id}`, { headers: { authorization: `Bearer ${this.token}` } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },
    showItems(categories) {
        return Promise.resolve()
            .then(() => {
                return axios.get(`${this.url}/${categories}`)
            })
            .then(({ status, data }) => {
                if (status !== 200) throw Error(`unexpected response status ${status} (${data.status})`)

                return data.data
            })
            .catch(err => {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                if (err.response) {
                    const { response: { data: { error: message } } } = err

                    throw Error(message)
                } else throw err
            })
    },
    unregisterUser(email, password, userId) {
        return Promise.resolve()
            .then(() => {
                return axios.delete(`${this.url}/profile/${userId}`, {params: { userId }, data: { email, password } }, { headers: { authorization: `Bearer ${this.token()}` } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    }
}

module.exports = furnitureApi