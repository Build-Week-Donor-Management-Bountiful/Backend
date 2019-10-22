const express = require('express')

const server = express()

// Dependencies for FrontEnd/Security.
const helmet = require('helmet')
const cors = require('cors')

// Middleware
const logger = require('./middleware/logger')
const authentication = require('./middleware/authenticate.js')

// Routes
const userRouter = require('./routes/users/users-router.js');
const authRouter = require('./routes/auth/auth-router.js');

// Function Invocation
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(logger);

// Routes Invocation
server.use('/api/auth', authRouter)
server.use('/api/users', authentication, userRouter)
module.exports = server;