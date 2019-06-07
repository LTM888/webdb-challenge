const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
  };
  
  function find() {
    return db('projects');
  }
  
  function findById(id) {
    return db('projects')
      .where({ id : id })
      .first();
  }
  
  function add(projects) {
    return db('projects')
        .insert('projects')
        .then(([id]) => {
            return findById(id)
        })
  }
  
  function update() {
    return db('projects')
        .where({id})
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id)
            } else {
                return null
            }
        });
  }
  
  function remove() {
    return db('projects')
        .where(id)
        .del();
  }
  