'use strict'

const axios = require('axios')

const furnitureApi = {
    url: 'NO-URL',

    registerUser(username, name, surname, email, password){
        return Promise.resolve()
        .then(()=>{
            return axios.post(`${this.url}/users`, { username, name, surname, email, password })
        })
        .then(({status,data})=>{
            if(status !== 201) throw Error(`unexpected response status ${status} (${data.status})`)
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
                return axios.get(`${this.url}/users/${id}`)
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
    unregisterUser( email, password) {
        return Promise.resolve()
            .then(() => {
                return axios.delete(`${this.url}/users`, { data: { email, password } })
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