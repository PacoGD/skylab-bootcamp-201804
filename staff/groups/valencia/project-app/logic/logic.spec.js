'use strict';

describe('logic (project-app)', () => {
    let originalTimeout

    beforeEach(() => {
        //originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        //jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000
    })

    // logic.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjAwMTVlZDk2NGMxMDAxNDQ3YzIyMCIsImlhdCI6MTUyNTY3ODU1NCwiZXhwIjoxNTI1NjgyMTU0fQ.NG8Dq9xVdKo8GVCXUnj854ZYUUaPOHWJKmNBnPPWF70'

//     describe('register', () => {
// console.log(logic.id)
//         it('should "tom", "password" register as new user', done => {
//             logic.register('tQm', 'password')
//                 .then(resp => {
//                     expect(resp).toBeDefined()
//                     expect(resp.status).toBe('OK')
//                     expect(resp.id).not.toBe('')

//                     done()
//                 })
//                 .catch(err => expect(err).toBeUndefined())
//         })
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

        describe('login', () => {
            // beforeEach(
            //     logic.login('tom', 'password')
            // )

            it('should "tom", "password" login return token and id', done => {
                logic.login('tom', 'password')
                    .then(resp => {
                        expect(resp).toBeDefined()
                        // expect(resp.id).not.toBe('')
                        // expect(resp.token).toBeDefined()

                        done()
                    })
                    .catch(err => expect(err).toBeUndefined())
            })

                it('should "tom" with the wrong "password" throw an error', done => {
                    logic.login('tom', 'invalidpassword')
                        .then(resp => {
                            expect(resp.status).toBe("KO")
                            expect(resp.error).toBe("username and/or password wrong")

                            done()
                        })
                    })

            //     describe('retrieve', () => {
            //         beforeEach(
            //             logic.login('tom', 'password')
            //         )

            //         it('should "tom", "password" login return token and id', done => {
            //             logic.retrieve()
            //                 .then(resp => {
            //                     expect(resp.status).toBe('OK')
            //                     expect(resp.id).toBeDefined()

            //                     done()
            //                 }) 
            //         })
            //     })

 describe('unregister', () => {

            it('should "tom", "password" delete the user', done => {
                logic.unregister('tom', 'password')
                    .then(resp => {
                        expect(resp).toBeDefined()
                        expect(resp.status).toBe('OK')

                        done()
                    })
            })

        })
    })})
// })