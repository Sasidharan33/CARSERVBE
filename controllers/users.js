const userrouter = require('express').Router()
const User = require('../models/user');
const bcrypt = require('bcrypt')

userrouter.get('/',async(req,res) => {
    const users = await User.find();
    res.json(users);
})

userrouter.post('/',async(req,res) => {
    const {username,email,password} = req.body;
    const users = await User.findOne({email});
    if(users){
        return res.status(409).json({error:'user already exist'})
    }
    const passwordhash = await bcrypt.hash(password,10);
    const user = new User({
        username,
        email,
        passwordhash
    });
    const saveduser =await user.save();
    res.json(saveduser)
})



module.exports = userrouter