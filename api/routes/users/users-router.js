const router = require('express').Router()

const Users = require('./users-model.js')

const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log('Route: Users: Error in get all', err)
        res.status(500).json({message:'Route: Users: Error in get all', err})
    })
})

router.get('/user', (req, res) => {
    const username = req.decoded
    console.log(username)
    Users.findBy({username})
    .then(users => {
        res.status(200).json({id: users.id, username:users.username})
    })
    .catch(err => {
        console.log('Route: Users: Error in get by filter', err)
        res.status(500).json({message:'Route: Users: Error in get by filter', err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Users.findById(id)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log('Route: Users: Error in get by ID', err)
        res.status(500).json({message:'Route: Users: Error in get by filter', err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Users.findById(id)
    .then(user => {
        if (!user) {
            res.status(404).json({message: "User does not exist!"})
        } else {
            if (changes.id) {
                res.status(400).json({message: "Illegal operation: Do not modify the id in the user"})
            } else {
            if (changes.password) {
                const hash = bcrypt.hashSync(changes.password, 10)
                changes.password = hash
                Users.update(id, changes)
                .then(user => {
                    res.status(200).json({id: user.id, username: user.username})
                })
                .catch(err => {
                    console.log('Route: Users: Error in put', err)
                    res.status(500).json({message:'Route: Users: Error in put/update', err})
                })
            } else {
                Users.update(id, changes)
                .then(user => {
                    res.status(200).json({id: user.id, username: user.username})
                })
                .catch(err => {
                    console.log('Route: Users: Error in put', err)
                    res.status(500).json({message:'Route: Users: Error in put/update', err})
                })
            }
        }
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Users.findById(id)
    .then(user => {
        if (!user) {
            res.status(404).json({message: "User does not exist!"})
        } else {
            const dead = user
            Users.remove(id)
            .then(() => {
                res.status(200).json({message: "Removed this user", removeduser: dead})
            })
            .catch(err => {
                console.log('Route: Users: Error in delete', err)
                res.status(500).json({message:'Route: Users: Error in delete', err})
            })
        }
    })
})

module.exports = router;