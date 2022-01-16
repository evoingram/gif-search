/* eslint-disable linebreak-style */
exports.seed = (knex) => {
	return knex('users')
		.del()
		.then(() => {
			return knex('users').insert([
				{
					id: 1,
					username: 'admin',
					password: 'eyJwYXNzd29yZCI6InBhc3N3b3JkIn0',
					email: 'evoingram@aquoco.onmicrosoft.com'
				},
				{
					id: 2,
					username: 'evoingram',
					password: 'eyJwYXNzd29yZCI6InBhc3N3b3JkIn0',
					email: 'inquiries@aquoco.co'
				},
				{
					id: 3,
					username: 'customer3',
					password: 'eyJwYXNzd29yZCI6InBhc3N3b3JkIn0',
					email: 'customer@aquoco.onmicrosoft.com'
				},
				{
					id: 4,
					username: 'customer4',
					password: 'eyJwYXNzd29yZCI6InBhc3N3b3JkIn0',
					email: 'customer4@aquoco.onmicrosoft.com'
				}
			]);
		});
};
