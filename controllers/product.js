const productrouter = require('express').Router()
const Products = require('../models/products');
const product = require('../json/products.json');

productrouter.get('/', async(req,res) => {
    try{
        await Products.find();
        res.json({message:"all products",product})
    }
    catch(err){
        res.json({message:'error in getting all notes'})
    }
})

productrouter.get('/',async(req,res) => {
    try{
        const pro = await Products.findOne(req.params.id)
        res.json({pro})
    }
    catch(err){
        res.json({message:'error in getting notes'})
    }
})



productrouter.post('/', async(req,res) => {
    try{
        await Products.deleteMany();
        res.json({message:'all product is deleted'})
        await Products.insertMany(product);
        res.json({message:'all products added',product})
         }
         catch(err){
             console.log(err.message);
         }
})

module.exports = productrouter