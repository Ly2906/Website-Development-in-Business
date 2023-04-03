const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Cart = new Schema({
    name: { type: String },
    price: { type: Number },
})

module.exports = mongoose.model('Cart', Cart)