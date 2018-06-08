const { Schema } = require('mongoose')

module.exports = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    color: {
        type: String
    },
    stock: {
        type: Number
    },
    price: {
        type: Number
    }
})