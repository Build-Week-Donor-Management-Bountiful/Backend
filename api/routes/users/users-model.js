const db = require('../../../data/config/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
}

function add(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        const [id] = ids
        return db('users')
        .where({id})
        .first()
    })
}

function find() {
    return db('users')
    .select('users.id', 'users.username')
}

function findBy(filter) {
    return db('users')
    .where(filter)
    .first()
    .select('users.id', 'users.username')
}

function findById(id) {
    return db('users')
    .where({id})
    .select('users.id', 'users.username')
}

function update(id, changes) {
    return db('users')
    .where({id})
    .update(changes)
    .then(ids => {
        console.log(ids)
    })
}

function remove(id) {
    return db('users')
    .where({id})
    .delete()
}