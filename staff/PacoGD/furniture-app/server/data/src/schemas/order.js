const { Schema } = require('mongoose')
const Item = require('./item')

module.exports = new Schema({
    deliveryAdress:{
        type: String,
    },
    creditCard:{
        type: Number
    },
    items:[Item]
})