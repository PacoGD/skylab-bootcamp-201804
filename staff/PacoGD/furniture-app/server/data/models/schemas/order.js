const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')
const Item = require('./item')

module.exports = new Schema({
    deliveryAdress: {
        type: String,
    },
    creditCard: {
        type: Number
    },
    date: {
        type: String
    },
    items: [{
        type: ObjectId,
        ref: 'Item'
    }]
})