require('dotenv').config();

const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET || "Is this a secret?"

function authenticate (req, res, next) {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                console.log("Error verifying token", err)
                return res.status(401).json(err)
            } else {
                req.decoded = decoded.name
                next();
            }
        })
    } else {
        return res.status(401).json({
            error: "No token provided, just be set on the Authorization header"
        })
    }
}

module.exports = authenticate