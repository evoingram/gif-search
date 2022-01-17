const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findByEmailOrId,
	findByUsername,
	update,
	remove
};

function find () {
	try {
		return db('users').raw('SELECT id,username,email FROM users;')
			.then(users => {
				try {
					return users.rows;
				} catch (error) {
					console.error(error);
				}
			})
			.catch(error => {
				console.error({
					error: error
				});
			});
	} catch (error) {
		console.error(error);
	}
}

function findByEmailOrId (fieldName, fieldValue) {
	let foundUserProfile;
	try {
		return db('users').raw(`SELECT id,username,email FROM users WHERE ${fieldName}='${fieldValue}' LIMIT 1;`)
			.then(id => {
				try {
					foundUserProfile = id.rows[0];
					return foundUserProfile;
				} catch (error) {
					console.error(error);
				}
			})
			.catch(error => {
				console.error({
					error: error
				});
			});
	} catch (error) {
		console.error(error);
	}
	return foundUserProfile;
}

function findByUsername (username) {
	let foundUserProfile;
	try {
		return db('users').raw(`SELECT id,username,password,email FROM users WHERE username='${username}' LIMIT 1;`)
			.then(id => {
				try {
					foundUserProfile = id.rows[0];
					return foundUserProfile;
				} catch (error) {
					console.error(error);
				}
			})
			.catch(error => {
				console.error({
					error: error
				});
			});
	} catch (error) {
		console.error(error);
	}
	return foundUserProfile;
}

// adds a user (register function)
async function add (user) {
	try {
		await db('users').insert(user, 'id').into('users').then(id => {
			try {
				return findByEmailOrId('id', id);
			} catch (error) {
				console.error(error);
			}
		})
			.catch(error => {
				console.error({
					error: error
				});
			});
	} catch (error) {
		console.error(error);
	}
}

function update (id, user) {
	let foundUserProfile;
	try {
		return db('users')
			.where('id', Number(id))
			.update(user)
			.then(id => {
				try {
					foundUserProfile = id.rows[0];
					return foundUserProfile;
				} catch (error) {
					console.error(error);
				}
			})
			.catch(error => {
				console.error({
					error: error
				});
			});
	} catch (error) {
		console.error(error);
	}
	return foundUserProfile;
};

function remove (id) {
	let foundUserProfile;
	try {
		return db('users')
			.where('id', Number(id))
			.del()
			.then(id => {
				try {
					foundUserProfile = id.rows[0];
					return foundUserProfile;
				} catch (error) {
					console.error(error);
				}
			})
			.catch(error => {
				console.error({
					error: error
				});
			});
	} catch (error) {
		console.error(error);
	}
	return foundUserProfile;
};
