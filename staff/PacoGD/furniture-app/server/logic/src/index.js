'use strict'

const { models: { User, Item, Order } } = require('data')

const logic = {
    registerUser(name, surname, email, password, username) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)

                        return User.create({ name, surname, email, password })
                            .then(() => true)
                    })
            })

    },
    retriveUser(id) {
        return Promise.resolve()
            .then(() => {
                return User.findById(id).select({ _id: 0, username: 1, name: 1, surname: 1, email: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    },
    updatePassword(email, password, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof newPassword !== 'string') throw Error('newPassword is not a string')

                if ((newPassword = newPassword.trim()).length === 0) throw Error('newPassword is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')
                return user
            })
            .then(user => {
                user.password = newPassword

                return user.save()
            })
            .then(() => true)
    },
    unregisterUser(email, password) {
        return Promise.resolve()
            .then(() => {
                return User.findOne({ email, password })
            })
            .then(user=>{
                if (!user) throw Error('wrong credentials')
                return user.remove()
            })
    },
    listOrders(id) {
    },
    listItems(id) {
    },
    newOrder(id, adress, card) {
    },
    deleteOrder(email, password) {
    }
}