const router = require('express').Router()

// Model imported
const Users = require('../users/users-model.js')

// Modules required
const bcrypt = require('bcryptjs')

// Middleware needed
const generateToken = require('../../middleware/tokenmaker.js');

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.add(user)
    .then(user => {
        console.log(user)
        const token = generateToken(user)
        res.status(201).json({message: "User created!", user, token})
    })
    .catch(err => {
        console.log('Route: Auth: Error in registering new User', err)
        res.status(500).json({message:'Route: Users: Error in registering a new User', err})
    })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body
    Users.findBy({username})
    .then(user => {
        console.log(user)
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            const id = user.id
            res.status(200).json({
                message: `Welcome ${user.username}`,
                id,
                token
            })
        } else {
            res.status(400).json({message: "Invalid credentials!"})
        }
    })
    .catch(err => {
        console.log('Route: Auth: Error in logging in user', err)
        res.status(500).json({message:'Route: Users: Error in loggin in a user', err})
    })
})

module.exports = router;