const dotenv = require('dotenv');
dotenv.config();
const router = require('express').Router();
const Search = require('./search-model');

const SearchHelpers = require('./search-helpers');

// User/password validation is NOT required on any routes.
// However, the feature is available and easily installed should it be requested.

// const restricted = require('../auth/restriction.js');

// GET:  search GIPHY for a search term
// return 5 results if GIPHY returns 5+ results OR
// return 0 if GIPHY returns less
router.get('/:searchterm', (req, res) => {
	const searchTerm = req.params.searchterm;
	if (!searchTerm) {
		res.status(404).json({ message: 'You must provide a search term to search GIPHY.' });
	} else {
		Search.findBySearchTerm(searchTerm, req.query.limit = 20)
			.then(results => {
				const finalResults = SearchHelpers.modifySearchResults(results);
				res.status(200).json(finalResults);
			})
			.catch(err => {
				res.status(500).json({ message: 'The search could not be completed.', error: err });
			});
	}
});

module.exports = router;
