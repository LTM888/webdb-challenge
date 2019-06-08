const db = require('../data/dbConfig');

const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: '../data/dbone.db3',
  },
  useNullAsDefault: true, 
  // debug: true,
};


module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('actions');
}

function findById(id) {
  return db('actions')
    .where({ id : id })
    .first();
}

function add(actions) {
  return db('actions')
      .insert(actions)
      .then(([id]) => {
          return findById(id)
      })
}

function update() {
  return db('actions')
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
  return db('actions')
      .where(id)
      .del();
}


// function find() {
//   return db('actions')
//     .join('project', 'actions.project_id', '=', 'projects.id')
//     .select(
//         { project: "projects.name "},
//         { 'project description': 'projects.description' },
//         { 'action id': 'actions.id ' },
//         'actions.description',
//         'actions.notes',
//         'actions.completed',
//         'actions.created_at',
//         'actions.updated_at'
//     );
// }

// function findById(id) {
//   return db('actions')
//     .where({ 'actions.project_id' : id })
//     .first()
//     .join('projects', 'actions.project_id', '= ', 'projects.id')
//     .select(
//         { project: 'project.name'},
//         { 'project description' : 'project.description '},
//         { 'action id': 'action.id'} ,
//         'actions.description',
//         'actions.notes',
//         'actions.completed',
//         'actions.created_at',
//         'actions.updated_at'
//     );
// }

// function add(action) {
//   return db('actions')
//     .insert(action, (id))
//     .then(([id]) => {
//         return findById(id);
//     });
// }

// function update() {
//   return db('actions')
//     .where({ id })
//     .update(changes)
//     .then(count => {
//         if (count > 0) {
//             return findById(id);
//         } else {
//             return null;
//         }
//     });
// }

// function remove(id) {
//   return db('actions')
//     .where({ id })
//     .del();
// }
