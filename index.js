require('dotenv').config()
const server = require('./api/server.js')

const MOTD = process.env.MOTD || "Thank you for donating your money/organs"

const PORT = process.env.PORT || 8000
server.get('/', (req, res) => {
    res.send(`<h1>${MOTD}</h1>`)
})

server.listen(PORT, () => {
    console.log(`=== The server is running on port ${PORT} ===`)
})