const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../routers/projects-router');
const actionsRouter = require('../routers/actions-router');

const server = express();

server.use(helmet());
server.use(express.json());
console.log(';:::::::::::inside the server::::::::')
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);
server.get('/', (req, res) => {
    res.status(200).json({ message: " and i am here "});

});

module.exports = server;