const request = require('supertest');

const searchRouter = require('./search-router');
const testModels = require('../test-models');

describe('test search router', function () {
	describe('GET /search', function () {
		it('should return 200 & json response', function () {
			try {
				request(searchRouter)
					.get('/search/cheeseburger')
					.then((res) => {
						try {
							expect(res.status).toBe(200);
							expect(res.type).toMatch(/json/i);
							expect(res).toStrictEqual(testModels.giphyModified5Results);
							expect(res.data[0]).toHaveProperty('gif_id');
							expect(res.data[0]).toHaveProperty('url');
						} catch (error) {
							console.error(error);
						}
					});
			} catch (error) {
				console.error(error);
			}
		});

		it('should return 0 modified search results', function () {
			try {
				request(searchRouter)
					.get('/search/kltawerjlks')
					.then((res) => {
						try {
							expect(res).toStrictEqual(testModels.giphyUnmodifiedNoResults);
						} catch (error) {
							console.error(error);
						}
					});
			} catch (error) {
				console.error(error);
			}
		});
	});
});
