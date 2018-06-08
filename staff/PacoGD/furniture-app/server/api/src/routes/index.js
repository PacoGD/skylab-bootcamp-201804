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

    logic.unregisterUser( email, password)
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
