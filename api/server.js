const express = require('express');
const productsRouter = require('./products/products-router');
const userRouter = require('./users/users-router');

const server = express();
server.use(express.json());

server.use('/api/products', productsRouter);
server.use('/api/users', userRouter);

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
        message: err.message,

    })
})

module.exports = server
