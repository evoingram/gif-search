const request = require('supertest');

const userRouter = require('./user-router');

describe('test user router', function () {
	describe('GET /api/users', function () {
		it('should return 200 & json response', function () {
			try {
				request(userRouter)
					.get('/api/users')
					.then((res) => {
						expect(res.status).toBe(200);
						expect(res.type).toMatch(/json/i);
					});
			} catch (error) {
				console.error(error);
			}
		});
	});
});
