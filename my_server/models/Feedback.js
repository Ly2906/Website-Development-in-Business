const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Feedback = new Schema({
    username: { type: String },
    useremail: { type: String },
    usermessage: { type: String }
})

module.exports = mongoose.model('Feedback', Feedback);