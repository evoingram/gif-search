const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const usersRouter = require('../users/user-router');
const loginRouter = require('../auth/login-router.js');
const registerRouter = require('../auth/register-router.js');
const searchRouter = require('../search/search-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(logger);

server.use('/search', searchRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
	res.send('<h1>🚀</h1>');
});

module.exports = server;
