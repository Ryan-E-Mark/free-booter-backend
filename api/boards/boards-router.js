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

router.get('/:id', async (req, res, next) => {
    try {
        const board = await Boards.getById(req.params.id)
        res.status(200).json(board)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newBoard = await Boards.postBoard(req.body)
        res.status(201).json(newBoard)
    } catch (err) {
        next(err)
    }
})

module.exports = router