const loginrouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const config = require('../utils/config')


loginrouter.post('/',async (req,res) => {
    const {username,email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(409).json({error:'user does not exist'})
    }
    const isauthenticated = await bcrypt.compare(password,user.passwordhash);

    if(!isauthenticated){
        return res.status(409).json({error:'incorrect password'})
    }

    const payloaddata = {
        username:user.username
    }
    const token = jwt.sign(payloaddata,config.SECRET,{expiresIn:3600});
    res.json({token:token,username:user.username})
})
module.exports = loginrouter