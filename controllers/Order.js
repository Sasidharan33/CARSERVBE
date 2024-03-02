const orderrouter = require('express').Router();
const Orders = require('../models/oreder');

orderrouter.post('/',async(req,res) => {
    const{firstname,lastname,phone,
    gmail,
    ordernote,
    items,
    tprice,
    payment,
    products,
        id,
        image,
        quantity,
        name,
        price,
    deliveredAddress,
        country,
        building,
        streetname,
        city_village,
        district,
        postal_zip  
    }= req.body
    const order = new Orders({
    firstname,lastname,phone,
    gmail,
    ordernote,
    items,
    tprice,
    payment,
    products,
        id,
        image,
        quantity,
        name,
        price,
    deliveredAddress,
        country,
        building,
        streetname,
        city_village,
        district,
        postal_zip 
    })
    const savedorder = await order.save()
    res.json(savedorder)
})

module.exports = orderrouter