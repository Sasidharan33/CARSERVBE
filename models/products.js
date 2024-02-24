const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    price:Number,
    quantity:Number,
    category:String
})

const Products = mongoose.model('Products',productSchema,'products')

module.exports=Products;