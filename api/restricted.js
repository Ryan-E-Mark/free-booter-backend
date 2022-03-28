const { JWT_SECRET } = require('./secret/index')
const jwt = require('jsonwebtoken')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return next({status: 401, message: "Token required!"})
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return next({status: 401, message: "Token invalid!"})
        }
        req.decodedJwt = decoded
        next()
    })
}

module.exports = restricted
