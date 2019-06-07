const router = require('express').Router();

const Project = require('./projects-model');
const Actions = require('./actions-model');
const db = require('../data/dbConfig');

router.get('/project/', (req, res ) => {
    Projects.find()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res
                .status(500)
                .json( {message: 'Not able to fetch your Project Now'});
        });
});

router.get('/projects/:id', (req, res) => {
    Projects.findById(req.params.id)
    .then(projects => {
        Actions.find()
        .where({ project_id: req.params.id})
        .then(actions => {
            projects.actions = actions;
            return res.status(200).json(projects);
        });
    })
    .catch(err => {
        res
        .status(500).json({message: 'Unable to fetch your project now'});
    });
});

module.exports = router;