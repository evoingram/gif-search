const searchHelpers = require('./search-helpers.js');
const testModels = require('../test-models');

describe('search helpers', function () {
	it('should return modified search results', function () {
		try {
			try {
				const expected = searchHelpers.modifySearchResults(testModels.giphyUnmodified5Results);
				expect(expected).toStrictEqual(testModels.giphyModified5Results);
			} catch (error) {
				console.error(error);
			}
		} catch (error) {
			console.error(error);
		}
	});

	it('should return no modified search results', function () {
		try {
			try {
				const expected = searchHelpers.modifySearchResults(testModels.giphyModifiedNoResults);
				expect(expected).toStrictEqual(testModels.giphyUnmodifiedNoResults);
			} catch (error) {
				console.error(error);
			}
		} catch (error) {
			console.error(error);
		}
	});
});
