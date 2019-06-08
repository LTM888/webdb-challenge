const router = require('express').Router();

const Projects = require('./projects-model');
const Actions = require('./actions-model');
const db = require('../data/dbConfig');

router.get('/', (req, res ) => {
  console.log(';;;;;;;;;;;;;;;; in get projects');
    Projects.find()
        .then(projects => {
          console.log(';;;;;;;;;;;;;;;;;;' + projects);
            res.status(200).json(projects);
        })
        .catch(err => {
            res
                .status(500)
                .json( {message: 'Not able to fetch your Project Now'});
        });
});
 
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id: id })
    .first()
    .then(projects => {
      db("projects")
        .where({ id })
        .then(actions => {
          projects.actions = actions;
          return res.status(200).json(projects);
        });
    })
    .catch(err => {
      res.status(500).json({ Error: "There was an error getting that" });
    });
});

// router.get('/:id', (req, res) => {
//   db('projects')
//     .where({ id: req.params.id }) 
//     .first() 
//     .then(project => {
//       if (project) {
//         res.status(200).json(project);
//       } else {
//         res.status(404).json({ message: 'Project was  not found' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

router.post('/', async (req, res) => {
  console.log(';:::::::::::inside the server::::::::')
    const project = req.body;
    if (project.name) {
      try {
        const inserted = await Projects.add(project);
        res.status(201).json(inserted);
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: 'We ran into an error creating the project' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of Project' });
    }
  });

module.exports = router;