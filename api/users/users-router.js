const express = require('express');
const Users = require('./users-model');
const bcrypt = require('bcryptjs');
const buildToken = require('./token-builder');


const router = express();

router.post('/register', async (req, res, next) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;
    try {
        const newUser = await Users.add(user);
        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    const { username, user_id } = req.user;
    const valid = bcrypt.compareSync(req.body.password, req.user.password);
    if (!valid) {
        next({status: 404, message: "invalid credentials"});
    } else {
        const token = buildToken(req.user);
        res.status(200).json({user_id, username, token});
    }
});

router.put('/:id', async (req, res, next) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;
    try {
        const updatedUser = await Users.updateById(req.params.id, user);
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
});

module.exports = router;