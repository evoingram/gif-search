const request = require('supertest');

const searchRouter = require('./search-router');

describe('test search router', function () {
	describe('GET /search', function () {
		it('should return 200 & json response', function () {
			request(searchRouter)
				.get('/search/cheeseburger')
				.then((res) => {
					expect(res.status).toBe(200);
					expect(res.type).toMatch(/json/i);
				});
		});

		it('should return modified search results', function () {
			const giphyModified5Results = {
				data: [
					{
						gif_id: 'GVaknm5baLdAc',
						url: 'https://giphy.com/gifs/GVaknm5baLdAc'
					},
					{
						gif_id: 'uQvxobRExS9nG',
						url: 'https://giphy.com/gifs/oktotally-cheeseburger-sassy-oktotally-uQvxobRExS9nG'
					},
					{
						gif_id: '1Fjxzv70Zvyqk',
						url: 'https://giphy.com/gifs/shakingfoodgifs-cheeseburger-shaking-food-1Fjxzv70Zvyqk'
					},
					{
						gif_id: 'KpLPyE3D6HJPa',
						url: 'https://giphy.com/gifs/mcdonalds-food-cheeseburger-KpLPyE3D6HJPa'
					},
					{
						gif_id: 'YDVrp1M0myCQ',
						url: 'https://giphy.com/gifs/cheeseburger-food-YDVrp1M0myCQ'
					}
				]
			};
			request(searchRouter)
				.get('/search/cheeseburger')
				.then((res) => {
					expect(res).toStrictEqual(giphyModified5Results);
					expect(res.data[0]).toHaveProperty('gif_id');
					expect(res.data[0]).toHaveProperty('url');
				});
		});

		it('should return no modified search results', function () {
			const giphyUnmodifiedNoResults = {
				data: []
			};
			request(searchRouter)
				.get('/search/kltawerjlks')
				.then((res) => {
					expect(res).toStrictEqual(giphyUnmodifiedNoResults);
				});
		});
	});
});
