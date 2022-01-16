const router = require('express').Router();

const Users = require('./user-model.js');

// User/password validation is NOT required on any routes.
// However, the feature is available and easily installed should it be requested.

// const restricted = require('../auth/restriction.js');

router.get('/', (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: 'The user with the specified id does not exist.' });
	} else {
		Users.findById(id)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				res.status(500).json({ message: 'The user information could not be retrieved.', error: err });
			});
	}
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: 'The user with the specified ID does not exist.' });
	}
	Users.remove(id)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.status(500).json({ message: 'The user could not be removed', error: err });
		});
});

module.exports = router;
