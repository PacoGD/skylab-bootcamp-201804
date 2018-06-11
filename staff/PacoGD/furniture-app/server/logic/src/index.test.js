'use strict'

require('dotenv').config()

const { mongoose, models: { Item, Order, User } } = require('data')
const logic = require('.')

const { env: { DB_URL } } = process

describe('logic (furniture )', () => {
    // const user = { username: 'JD', name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' }
    // const item = { title: 'Super sofa', image: 'url', description: 'lorem ipsum', color: 'blue', category: 'sofa', stock: 1, price: 100 }
    // const order = {
    //     deliveryAdress: 'Roc boronat', creditCard: 1234567890,
    //     date: "10/06/18"
    // }

    before(()=> mongoose.connect(DB_URL))

    beforeEach(()=>{
        return Promise.all([User.remove()])
    })

    describe('register user',()=>{
        it('should succed on correct data',()=>{
            logic.registerUser( 'JD',  'John',  'Doe', 'johndoe@mail.com', '123')
            .then(res => expect(res).toBeDefined())
        })
    })
    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})