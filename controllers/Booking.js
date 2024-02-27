const bookingrouter = require('express').Router();
const Booking = require('../models/booking')


bookingrouter.post('/',async (req,res) => {
    const{name,email,service,date,request} = req.body
    const booking = new Booking({
        name,
        email,
        service,
        date,
        request
    })
    const savedbook = await booking.save()
    res.json(savedbook)
})

module.exports = bookingrouter