const axios = require('axios');

console.log(findBySearchTerm('cheeseburgers', 20));

async function findBySearchTerm (searchTerm, limit) {
	const params = {
		api_key: 'nPcu7YTrpMkRwN3aMWS63gJWEm4bKKI0',
		q: searchTerm,
		limit: limit
	};

	return (await axios.get('https://api.giphy.com/v1/gifs/search', { params })).data;
}
