const express = require('express')
const Boards = require('./boards-model')

const router = express()

router.get('/', async (req, res, next) => {
    try {
        const boards = await Boards.getAll()
        res.status(200).json(boards)
    } catch (err) {
        next(err)
    }
})

module.exports = router