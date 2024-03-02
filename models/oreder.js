const mongoose = require('mongoose')

const orderschema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    gmail:String,
    ordernote:String,
    items:Number,
    tprice:Number,
    payment:String,
    products:[{
        id:Number,
        image:String,
        quantity:Number,
        name:String,
        price:Number,
    }],
    deliveredAddress:{
        country:String,
        building:Number,
        streetname:String,
        city_village:String,
        district:String,
        postal_zip:Number  
    }
    
});

const Orders = mongoose.model('Orders',orderschema,'orders')
module.exports=Orders;