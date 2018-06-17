const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')

const router = express.Router()

const jsonBodyParser = bodyParser.json()

router.post('/users', jsonBodyParser, (req, res) => {
    const { body: { username, name, surname, email, password } } = req
    logic.registerUser(name, surname, email, password, username)
        .then(id => {
            res.status(201)
            res.json({ status: 'OK', data: { id } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
    router.post('/login', jsonBodyParser, (req, res) => {
        const { body: { email, password } } = req
    
        logic.loginUser(email, password)
            .then(id => {    
                res.status(200)
                res.json({ status: 'OK', data:  id  })
            })
            .catch(({ message }) => {
                res.status(400)
                res.json({ status: 'KO', error: message })
            })
    })
router.get('/users/:userId', (req, res) => {
    const { params: { userId } } = req

    return logic.retriveUser(userId)
        .then(user => {
            res.status(200)
            res.json({ status: 'OK', data: user })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
router.delete('/users', jsonBodyParser, (req, res) => {
    const { params: { userId }, body: { email, password } } = req

    logic.unregisterUser(email, password)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.patch('/users/:userId', jsonBodyParser, (req, res) => {
    const { body: { email, password, newPassword } } = req

    logic.updateUser(email, password, newPassword)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.delete('/users/:userId', jsonBodyParser, (req, res) => {
    const { body: { email, password } } = req

    logic.unregisterUser(email, password)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
router.get('/users/:userId/orders/', (req, res) => {
    const { params: { id } } = req

    logic.listOrders(id)
        .then(note => {
            res.json({ status: 'OK', data: orders })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/categories/:categories', (req, res) => {
    const { params: { categories } } = req

    logic.showItems(categories)
        .then(note => {
            res.json({ status: 'OK', data: items })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
router.get('/users/:userId/orders/', (req, res) => {
    const { params: { id } } = req

    logic.listOrdersItems(id)
        .then(note => {
            res.json({ status: 'OK', data: items })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
// listItemsFromOrder(id, orderId) {

// },

router.delete('/users/:userId/orders/:orderId', jsonBodyParser, (req, res) => {
    const { body: { id, orderId } } = req

    logic.id, orderId(id, orderId)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

module.exports = router
