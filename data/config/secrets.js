require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET || "Is this a secret?"
}