const mongoose = require('mongoose')

const bookschema = new mongoose.Schema({
    name:String,
    email:String,
    service:String,
    date:Date,
    request:String
})

const Booking = mongoose.model('Booking',bookschema,'services')

module.exports= Booking