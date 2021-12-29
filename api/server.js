const express = require('express')
const boardRouter = require('./boards/boards-router')

const server = express()
server.use(express.json())

server.use('/api/boards', boardRouter)

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
        message: err.message,

    })
})

module.exports = server
