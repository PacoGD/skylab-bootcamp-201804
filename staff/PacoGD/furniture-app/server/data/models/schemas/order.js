const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')
const Item = require('./item')

module.exports = new Schema({
    deliveryAdress: {
        type: String,
    },
    creditCard: {
        type: Number
    },
    price:{
        type: Number
    },
    items: [{
        type: Schema.ObjectId,
        ref: 'Item'
    }]
})