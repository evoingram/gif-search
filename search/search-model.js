const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	findBySearchTerm
};

async function findBySearchTerm (searchTerm, limit) {
	let responseData;
	try {
		const params = {
			api_key: process.env.GIPHY_API_KEY,
			q: searchTerm,
			limit: limit
		};
		await axios.get('https://api.giphy.com/v1/gifs/search', { params })
			.then(response => {
				try {
					responseData = response.data;
					return response.data;
				} catch (error) {
					console.error(error);
				}
			})
			.catch(error => {
				console.error({
					error: error
				});
			});
		return responseData;
	} catch (error) {
		console.error(error);
	}
	return responseData;
}
