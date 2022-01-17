const searchModel = require('./search-model.js');

describe('search model', function () {
	it('should return unmodified search results', async function () {
		const response = await searchModel.findBySearchTerm('cheeseburger', 20);
		expect(response).toHaveProperty('data');
		expect(response.data[0]).toHaveProperty('id');
		expect(response.data[0]).toHaveProperty('url');
		expect(response.data[0]).toHaveProperty('analytics');
	});

	it('should return no unmodified search results', async function () {
		const giphyUnmodifiedNoResults = [];
		const response = await searchModel.findBySearchTerm('dsajklfdsjklafasd', 20);
		expect(response).toHaveProperty('data');
		expect(response.data).toStrictEqual(giphyUnmodifiedNoResults);
	});
});
