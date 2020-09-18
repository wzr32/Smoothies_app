const express = require('express');
const cors = require('cors');
const app = express();

const Routes = require('../routes');

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/smoothies', Routes())

module.exports = app;
