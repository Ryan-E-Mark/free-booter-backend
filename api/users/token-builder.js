const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secret/index.js');

function buildToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = buildToken;
