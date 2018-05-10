const robotFinder = {
    url: 'http://api.citybik.es/v2/networks',
    arrayIni: [],

    findAll() {
        fetch(this.url)
            .then(res => res.json())
            .then(data => this.arrayIni = data)
    }


}  //sobrará?                
            
    

    // register(username, password) {

    //     const data = {
    //         username,
    //         password
    //     }
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof password !== 'string') throw Error("Invalid password, it should be a string")
    //             if (typeof username !== 'string') throw Error("Invalid username, it should be a string")

    //             return fetch(`${this.url}/user`, {
    //                 method: 'POST',
    //                 body: JSON.stringify(data),
    //                 headers: new Headers({ "content-Type": "application/json" })
    //             })
    //                 .then(res => res.json())
    //                 .then(res => { 
    //                     if (res.status === "OK") {this.id = res.data.id; }
    //                     return res })
    //         })
    // },

    // login(username, password) {
    //     const data = {
    //         username,
    //         password
    //     }
    //     return Promise.resolve()
    //         .then(() => {
    //             return fetch(`${this.url}/auth`, {
    //                 method: 'POST',
    //                 body: JSON.stringify(data),
    //                 headers: new Headers({ "content-Type": "application/json" })
    //             })
    //                 .then(res => res.json())
    //                 .then(res => { 
    //                     if(res.status === "OK"){
    //                         this.token = res.data.token; 
    //                         this.id = res.data.id;
    //                     } 
    //                     return res })
    //         })
    // },

    // update(data) {
        
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof data !== 'object' || data instanceof Array) throw Error("invalid data object")
                
    //             if(!(data.hasOwnProperty('username')) || !(data.hasOwnProperty('password'))) throw Error("data needs username and password")

    //             return fetch(`${this.url}/user/${this.id}`, {
    //                 method: 'PUT',
    //                 body: JSON.stringify(data),
    //                 headers: new Headers({
    //                     "content-Type": "application/json",
    //                     "Authorization": `Bearer ${this.token}`
    //                 })
    //             })
    //                 .then(res => res.json())
    //                 .then(res => {
    //                     console.log(res)
    //                     return res })
    //         })
    // },

    // retrieve() {
    //     return Promise.resolve()
    //         .then(() => {
    //             return fetch(`${this.url}/user/${this.id}`, {
    //                 method: 'GET',
    //                 headers: new Headers({
    //                     "content-Type": "application/json",
    //                     "Authorization": `Bearer ${this.token}`
    //                 })
    //             })
    //                 .then(res => res.json())
    //                 .then(res => res)
                    
    //         })
    // },

    // unregister(username, password) {

    //     const data = {
    //         username,
    //         password
    //     }
    //     return Promise.resolve()
    //         .then(() => {
    //             return fetch(`${this.url}/user/${this.id}`, {
    //                 method: 'DELETE',
    //                 body: JSON.stringify(data),
    //                 headers: new Headers({
    //                     "content-Type": "application/json",
    //                     "Authorization": `Bearer ${this.token}`
    //                 })
    //             })
    //                 .then(res => res.json())
    //                 .then(res => { 

    //                     return res })
    //         })
    // }

// }
// export default robotFinder