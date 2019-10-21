const router = require('express').Router()

// Model imported
const Users = require('../users/users-model.js')

// Modules required
const bcrypt = require('bcryptjs')

// Middleware needed


router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.add(user)
    .then(user => {
        res.status(201).json({message: "User created!", user})
    })
    .catch(err => {
        console.log('Route: Auth: Error in registering new User', err)
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body
    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const id = user.id
            res.status(200).json({
                message: `Welcome ${user.username}`,
                id
            })
        }
    })
    .catch(err => {
        console.log('Route: Auth: Error in logging in user', err)
        res.status(500).json(err)
    })
})

module.exports = router;