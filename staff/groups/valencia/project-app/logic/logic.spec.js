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

        it('password empty should throw error', done => {
            logic.register('tom', )
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe("Invalid password, it should be a string")

                    done()
                })
        })

        it('one argument should throw error', done => {
            logic.register('tom')
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe("Invalid password, it should be a string")

                    done()
                })
        })

        it('password !== string should throw error', done => {
            logic.register('tom', {})
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe("Invalid password, it should be a string")

                    done()
                })
        })
        it('username !== string should throw error', done => {
            logic.register({}, 'password')
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe("Invalid username, it should be a string")

                    done()
                })
        })

        it('should logic.register("miaz", "password") throw an Error if already created', done => {
            logic.register('miaz', 'pass')
                .then(resp => {
                    expect(resp.error).toBe('user with username "miaz" already exists')
                    expect(resp.status).toBe('KO')
                    expect(resp.id).not.toBe('')
                    done()


                })
        })
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
        it('should "a23sd34fg56h7kij" with the wrong "password" throw an error', done => {
            logic.login('a23sd34fg56h7kij', 'invalidpassword')
                .then(resp => {
                    expect(resp.status).toBe("KO")
                    expect(resp.error).toBe('user with username "a23sd34fg56h7kij" does not exist')

                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })

        it('should "miaz" with the wrong "password" throw an error', done => {
            logic.login('miaz', 'invalidpassword')
                .then(resp => {
                    expect(resp.status).toBe("KO")
                    expect(resp.error).toBe("username and/or password wrong")

                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })
    })

    describe('update', () => {

        it('should "miaz", "password", "age", "unknow" add age and with retrieve get age', done => {
            logic.update('miaz', 'password', 'age', 'unknow')
                .then(resp => {
                    expect(resp).toBeDefined()
                    expect(resp.status).toBe('OK')
                    
                    done()
                }).then(() => logic.retrieve('miaz', 'password'))
                    .then(resp => {
                    expect(resp.data.age).toBe('unknow')
                    })

                .catch(err => expect(err).toBeUndefined())
        })
    })

    describe('retrieve', () => {

        it('should "miaz", "password" return user information', done => {
            logic.retrieve('miaz', 'password')
                .then(resp => {
                    expect(resp).toBeDefined()
                    expect(resp.status).toBe('OK')
                    expect(resp.data.username).toBe('miaz')
                    expect(resp.data.age).toBe('unknow')
                    expect(resp.data.id).not.toBe('')
                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })
    })

    describe('unregister', () => {

        it('should "miaz", "invalidpassword" throw an error if password is invalid', done => {
            logic.unregister('miaz', 'invalidpassword')
                .then(resp => {
                    expect(resp.status).toBe("KO")
                    expect(resp.error).toBe("username and/or password wrong")

                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })

        it('should "a23sd34fg56h7kij", "password" throw an error if user is invalid', done => {
            logic.unregister("a23sd34fg56h7kij", 'password')
                .then(resp => {
                    expect(resp.status).toBe("KO")
                    expect(resp.error).toBe("username and/or password wrong")

                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })
    

        it('should "miaz", "password" delete the user', done => {
            logic.unregister('miaz', 'password')
                .then(resp => {
                    expect(resp).toBeDefined()
                    expect(resp.status).toBe('OK')

                    done()
                })
                .catch(err => expect(err).toBeUndefined())
        })
    })

})

