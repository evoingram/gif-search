const UserHelpers = require('./user-helpers.js');

describe('user helpers', function () {
	it('should validate username & password', function () {
		try {
			const user = {
				username: 'evoingram1',
				password: 'P2ssword',
				email: 'evoingram@gmail.com'
			};
			const errors = [];
			expect(UserHelpers.validateUser(user).isSuccessful).toBe(true);
			expect(UserHelpers.validateUser(user).errors).toStrictEqual(errors);
		} catch (error) {
			console.error(error);
		}
	});
});
