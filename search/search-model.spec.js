const searchModel = require('./search-model.js');

describe('search model', function () {
	it('should return unmodified search results', async function () {
		try {
			const response = await searchModel.findBySearchTerm('cheeseburger', 20);
			expect(response).toHaveProperty('data');
			expect(response.data[0]).toHaveProperty('id');
			expect(response.data[0]).toHaveProperty('url');
			expect(response.data[0]).toHaveProperty('analytics');
		} catch (error) {
			console.error(error);
		}
	});

	it('should return no unmodified search results', async function () {
		try {
			const giphyUnmodifiedNoResults = [];
			const response = await searchModel.findBySearchTerm('dsajklfdsjklafasd', 20);
			expect(response).toHaveProperty('data');
			expect(response.data).toStrictEqual(giphyUnmodifiedNoResults);
		} catch (error) {
			console.error(error);
		}
	});
});
