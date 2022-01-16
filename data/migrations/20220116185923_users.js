exports.up = function (knex) {
	return knex.schema.createTable('users', users => {
		users.increments('id');

		users
			.string('username', 256)
			.notNullable()
			.unique();

		users
			.string('password', 256)
			.notNullable();

		users
			.string('email', 256)
			.notNullable()
			.unique();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users');
};
