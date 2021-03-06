const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');
const Token = require('./auth-helpers.js');

router.post('/', (req, res) => {
	const { username, password } = req.body;

	Users.findByUsername(username)
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = Token.getJwt(user.username);
				res.status(200).json({
					id: user.id,
					username: user.username,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = router;
