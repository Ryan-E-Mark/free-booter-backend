const express = require('express');
const Users = require('./users-model');
const bcrypt = require('bcryptjs');


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
        res.status(200).json({user_id, username});
    }
})


module.exports = router;