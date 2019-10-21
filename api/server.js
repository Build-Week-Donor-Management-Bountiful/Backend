const express = require('express')

const server = express()

// Dependencies for FrontEnd/Security.
const helmet = require('helmet')
const cors = require('cors')

// Middleware
const logger = require('./middleware/logger')

// Routes
const userRouter = require('./routes/users/users-router.js')

// Function Invocation
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(logger);

// Routes Invocation
server.use('/api/users', userRouter)


module.exports = server;