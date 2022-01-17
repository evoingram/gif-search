const AuthHelpers = require('./auth-helpers.js');

describe('auth helpers', function () {
	it('should return token', function () {
		const username = 'evoingram1';
		expect(AuthHelpers.getJwt(username).includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')).toBe(true);
	});
});
