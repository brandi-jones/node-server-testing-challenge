const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    get,
    remove,
    getById
};

function get() {
    return db('dogs');
}

function getById(id) {
    return db('dogs')
        .where({id})
        .first();
}

async function insert(dog) {
    const [id] = await db('dogs').insert(dog);

    return getById(id);
}

async function remove(id) {
    const removedDog = await getById(id);

    return db('dogs')
        .where({id})
        .del()
        .then(() => {
            return removedDog
        })
}