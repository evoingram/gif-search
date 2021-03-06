const router = require('express').Router();

const Users = require('./user-model.js');

// User/password validation is NOT required on any routes.
// However, the feature is available and easily installed should it be requested.

// const restricted = require('../auth/restriction.js');

// GET:  get list of all users
router.get('/', (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

// GET:  get individual user
router.get('/:id', (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: `The user with the specified id ${id} does not exist.` });
	} else {
		Users.findByEmailOrId('id', id)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				res.status(500).json({ message: 'The user information could not be retrieved.', error: err });
			});
	}
});

// PUT:  update user
router.put('/:id', (req, res) => {
	const usersid = req.params.id;
	const updatedUser = req.body;

	Users.update(usersid, updatedUser)
		.then((user) => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: `Could not find user with given id ${usersid}.` });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to update user.', error: err });
		});
});

// DELETE:  delete a user
router.delete('/:id', (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: `The user with the specified id ${id} does not exist.` });
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
