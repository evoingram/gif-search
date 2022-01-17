const modifySearchResults = (results) => {
	const finalResults = {
		data: []
	};
	if (results.data.length >= 5) {
		for (let x = 0; x < 5; x++) {
			const currentResult = {
				gif_id: results.data[x].id,
				url: results.data[x].url
			};
			finalResults.data.push(currentResult);
		}
	}
	return finalResults;
};

module.exports = {
	modifySearchResults
};
