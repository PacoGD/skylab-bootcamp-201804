'use strict'

const { models: { User, Item, Order } } = require('data')

const logic = {
    registerUser(name, surname, email, username, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof username !== 'string') throw Error('username is not a string')

                if ((username = username.trim()).length === 0) throw Error('username is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)
                        return User.findOne({ username })
                    })
                    .then(user => {
                        if (user) throw Error(`user with username ${username} already exists`)
                        return User.create({ name, surname, email, username, password })
                            .then(user => user._id)
                    })
            })
    },
    authenticateUser(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },
    retriveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id).select({ _id: 0, username: 1, name: 1, surname: 1, email: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)
                return user
            })
    },
    updatePassword(id, email, password, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')
                
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')
                
                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                if (typeof newPassword !== 'string') throw Error('newPassword is not a string')

                if ((newPassword = newPassword.trim()).length === 0) throw Error('newPassword is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user
            })
            .then(user => {
                user.password = newPassword

                return user.save()
            })
            .then(() => true)
    },
    unregisterUser(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },
    listOrders(id) {
        return Promise.resolve()
            .then(() => {
                return User.findById(id)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${id}`)
                        if (!user.orders) throw Error(`no orders yet`)

                        return user.orders
                    })
            })
    },
    showItems(categories) {
        return Promise.resolve()
            .then(() => {
                return Item.find({ category: categories })
                    .then((items) => {
                        if (!items) throw Error('invalidad category')
                        return items
                    })
            })
    },
    listOrdersItems(id) {
        return Promise.resolve()
            .then(() => {
                return User.findById(id)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${id}`)
                        if (!user.orders) throw Error(`no orders yet`)

                        return user.orders.map(order => order.items)
                    })
            })
    },
    listItemsFromOrder(id, orderId) {
        return Promise.resolve()
            .then(() => {
                return User.findById(id)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${id}`)
                        if (!user.orders) throw Error(`no orders yet`)

                        return user.orders.map(order => order.items)
                    })
            })
    },
    deleteOrder(id, orderId) {
        return Promise.resolve()
            .then(() => {
                return User.findById(id)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${id}`)

                        const order = user.orders.id(orderId)

                        if (!order) throw Error(`no note found with id ${orderId}`)

                        order.remove()

                        return user.save()
                    })
            })
    }
}

module.exports = logic

// newItem(title, image, description, color, category, stock, price) {
//     return Promise.resolve()
//         .then(() => {
//             return Item.create({ title, image, description, color, category, stock, price })
//                 .then(item => item._id)
//         })
// },
// newOrder(id, itemId) {
//     return Promise.resolve()
//         .then(() => {
//             return User.findById(id)
//                 .then(user => {
//                     if (!user) throw Error(`no user found with id ${userId}`)

//                     const order = new Order({ item: {} })

//                     user.notes.push(note)

//                     return user.save()
//                         .then(() => user)
//                 })
//         })
// },