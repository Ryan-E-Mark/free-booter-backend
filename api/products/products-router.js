const express = require('express')
const Products = require('./products-model')

const router = express()

router.get('/', async (req, res, next) => {
    try {
        const products = await Products.getAll()
        res.status(200).json(products)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const board = await Products.getById(req.params.id)
        res.status(200).json(board)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newBoard = await Products.postBoard(req.body)
        res.status(201).json(newBoard)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedBoard = await Products.updateById(req.body, req.params.id)
        res.status(200).json(updatedBoard)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedBoard = await Products.deleteById(req.params.id)
        res.status(200).json({message: `Board id:${req.params.id} has been deleted`, deletedBoard})
    } catch (err) {
        next(err)
    }
})

module.exports = router