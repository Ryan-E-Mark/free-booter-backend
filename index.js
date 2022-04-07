require('dotenv').config()

const server = require('./api/server')

const port = process.env.PORT || 57978

server.listen(port, () => {
    console.log(`listening on ${port}`)
})
