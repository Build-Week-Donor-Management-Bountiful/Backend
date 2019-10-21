const router = require('express').Router()

const Users = require('./users-model.js')

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log('Route: Users: Error in get all', err)
        res.status(500).json(err)
    })
})

router.get('/user', (req, res) => {
    const username = req.decoded
    Users.findBy({username})
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log('Route: Users: Error in get by filter', err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Users.findById(id)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log('Route: Users: Error in get by ID', err)
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Users.update(id, changes)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log('Route: Users: Error in put', err)
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Users.remove(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log('Route: Users: Error in put', err)
        res.status(500).json(err)
    })
})

module.exports = router;