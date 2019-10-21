const jwt = require('jsonwebtoken')

const secret = require('../../data/config/secrets.js')

function generateToken(user) {
    console.log('user in gt', user.username)
    const payload = {
        subject: user.id,
        name: user.username
    }

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}

module.exports = generateToken