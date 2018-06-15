'use strict'

require('dotenv').config()

const { expect } = require('chai')
const { mongoose, models: { Item, Order, User } } = require('data')
const logic = require('.')


const { env: { DB_URL } } = process

describe('logic (furniture )', () => {
    const user = { username: 'JD', name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' }
    const user2 = { username: 'MT', name: 'Mike', surname: 'Tyson', email: 'miketyson@mail.com', password: '123' }
    // const item = { title: 'Super sofa', image: 'url', description: 'lorem ipsum', color: 'blue', category: 'sofa', stock: 1, price: 100 }
    // const order = {
    //     deliveryAdress: 'Roc boronat', creditCard: 1234567890,
    //     date: "10/06/18"
    // }
    const dummyId = 'fjsdf'

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        return Promise.all([User.remove()])
    })

    false && describe('register user', () => {
        it('should succed on correct data', () => {
            logic.registerUser('John', 'Doe', 'johndoe@mail.com', 'JD', '123')
                .then(res => expect(res).to.exist)
        })
        it('should fail on already registered email', () =>
            User.create(user)
                .then(() => {
                    const { name, surname, email, username, password, _id, order } = user

                    return logic.registerUser(name, surname, email, username, password)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with email ${user.email} already exists`)
                })
        )
        it('should fail on already registered username', () =>
            User.create(user2)
                .then(() => {
                    const { name, surname, email, username, password, _id, order } = user

                    return logic.registerUser(name, surname, email, username, password)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with username ${user.username} already exists`)
                })
        )
        it('should fail on no user name', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.registerUser(user.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.registerUser(user.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.registerUser(user.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.registerUser(user.name, user.surname)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.registerUser(user.name, user.surname, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.registerUser(user.name, user.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user username', () =>
            logic.registerUser(user.name, user.surname, user.email)
                .catch(({ message }) => expect(message).to.equal('username is not a string'))
        )

        it('should fail on empty user username', () =>
            logic.registerUser(user.name, user.surname, user.email, '')
                .catch(({ message }) => expect(message).to.equal('username is empty or blank'))
        )

        it('should fail on blank user username', () =>
            logic.registerUser(user.name, user.surname, user.email, '     ')
                .catch(({ message }) => expect(message).to.equal('username is empty or blank'))
        )
        it('should fail on no password', () =>
            logic.registerUser(user.name, user.surname, user.email, user.username)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty password', () =>
            logic.registerUser(user.name, user.surname, user.email, user.username, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank password', () =>
            logic.registerUser(user.name, user.surname, user.email, user.username, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    false && describe('retrive user', () => {
        it('it should succed on correct data', () => {
            return User.create(user)
                .then((user) => {
                    return logic.retriveUser(user.id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { name, surname, email, username, password, _id, order } = user

                    expect(name).to.equal('John')
                    expect(surname).to.equal('Doe')
                    expect(email).to.equal('johndoe@mail.com')
                    expect(username).to.equal('JD')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(order).to.be.undefined
                })
        })

    })
    false && describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(user)
                .then(() => {
                    return logic.unregisterUser('johndoe@mail.com', '123')
                        .then(res => {
                            expect(res).to.be.true
                        })        
                })
        )

        it('should fail on no user email', () =>
            logic.unregisterUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.unregisterUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.unregisterUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.unregisterUser(user.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.unregisterUser(user.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.unregisterUser(user.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })
    describe('login user', () => {
        it('should succeed on correct data', () =>
            User.create(user)
                .then(() =>
                    logic.loginUser('johndoe@mail.com', '123')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user email', () =>
            logic.loginUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.loginUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.loginUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.loginUser(user.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.loginUser(user.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.loginUser(user.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('login user',()=>{

    })
    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})