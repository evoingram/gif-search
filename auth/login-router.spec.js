const request = require('supertest');

const loginRouter = require('./login-router');

describe('test login router', function () {
	describe('POST /api/login', function () {
		it('should return 200 & json response', function () {
			request(loginRouter)
				.post('/api/login')
				.send({ username: 'evoingram1', password: 'P2ssword', email: 'evoingram@gmail.com' })
				.then((res) => {
					expect(res.status).toBe(200);
					expect(res.body.token).toBe(res.body.token);
					expect(res.type).toMatch(/json/i);
				});
		});
	});
});
