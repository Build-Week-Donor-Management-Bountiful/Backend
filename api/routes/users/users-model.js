const db = require('../../../data/dbConfig.js')

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
    })
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
    .where(filter)
}

function findById(id) {
    return db('users')
    .where({id})
}

function update(id, changes) {
    return db('users')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('users')
    .where({id})
    .delete()
}