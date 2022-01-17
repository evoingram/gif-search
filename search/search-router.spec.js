const request = require('supertest');

const searchRouter = require('./search-router');

describe('test search router', function () {
	describe('GET /search', function () {
		it('should return 200 & json response', function () {
			try {
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
						try {
							expect(res.status).toBe(200);
							expect(res.type).toMatch(/json/i);
							expect(res).toStrictEqual(giphyModified5Results);
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
			const giphyUnmodifiedNoResults = {
				data: []
			};
			try {
				request(searchRouter)
					.get('/search/kltawerjlks')
					.then((res) => {
						try {
							expect(res).toStrictEqual(giphyUnmodifiedNoResults);
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
