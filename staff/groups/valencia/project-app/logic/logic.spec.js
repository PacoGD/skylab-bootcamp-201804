'use strict';

describe('logic (project-app)', () => {
    let originalTimeout

    beforeEach(() => {
        // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = 300
    })


    describe('register', () => {

        it('should "miaz", "password" register as new user', done => {
            logic.register('miaz', 'password')
                .then(resp => {
                    expect(resp).toBeDefined()
                    expect(resp.status).toBe('OK')
                    expect(resp.id).not.toBe('')
                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })

//         it('password !== string should throw error', done => {
//             logic.register('tom', )
//                 .catch(err => {
//                     expect(err).toBeDefined()
//                     expect(err.message).toBe("Invalid password, it should be a string")

//                     done()
//                 })
//         })

//         it('password !== string should throw error', done => {
//             logic.register('tom', {})
//                 .catch(err => {
//                     expect(err).toBeDefined()
//                     expect(err.message).toBe("Invalid password, it should be a string")

//                     done()
//                 })
//         })
//         it('username !== string should throw error', done => {
//             logic.register({}, 'password')
//                 .catch(err => {
//                     expect(err).toBeDefined()
//                     expect(err.message).toBe("Invalid username, it should be a string")

//                     done()
//                 })
//         })

//         it('should logic.register("tom", "password") and logic.register("tom", "password") throw an Error', done => {
//             logic.register('tom', 'pass')
//                 .then(resp => {
//                     expect(resp.error).toBe('user with username "tom" already exists')
//                     expect(resp.status).toBe('KO')
//                     expect(resp.id).not.toBe('')
//                     done()


//                 })
//         })
    })

    describe('login', () => {
        // beforeEach(
        //     logic.login('tom', 'password')
        // )

        it('should "miaz", "password" login return token and id', done => {
            logic.login('miaz', 'password')
                .then(resp => {
                    expect(resp).toBeDefined()
                    expect(resp.id).not.toBe('')
                    expect(resp.token).not.toBe('')
                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })

        //TIRA ERROR POR NO MIRAR SI TRAE TOKEN
        // it('should "tom" with the wrong "password" throw an error', done => {
        //     logic.login('tom', 'invalidpassword')
        //         .then(resp => {
        //             expect(resp.status).toBe("KO")
        //             expect(resp.error).toBe("username and/or password wrong")

        //             done()
        //         })
        //     })
    })

    describe('unregister', () => {

        it('should "miaz", "password" delete the user', done => {
            logic.unregister('miaz', 'password')
                .then(resp => {
                    expect(resp).toBeDefined()
                    expect(resp.status).toBe('OK')

                    done()
                })
        })
    })

})

