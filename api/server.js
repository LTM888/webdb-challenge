const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../routers/projects-router');
const actionsRouter = require('../routers/actions-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/', projectRouter)
server.use('/api/', actionsRouter);
server.get('/', (req, res) => {
    res.status(200).json({ message: " and i am here "});

});

module.exports = server;