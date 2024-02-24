const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const config = require('./utils/config');
const userrouter = require('./controllers/users');
const loginrouter = require('./controllers/login')
const productrouter = require('./controllers/product')

mongoose.set('strictQuery', false);

mongoose.connect(config.URL)
.then(() => {
  console.log('connected to mongodb')
})
.catch((error) => {
    console.log(error)
})
app.use(cors());
app.use(express.json());
app.use('/api/products',productrouter);
app.use('/api/login',loginrouter)
app.use('/api/users',userrouter);


module.exports =app;