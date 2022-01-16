const jwt = require('jsonwebtoken');

// User/password validation is NOT required on any routes.
// However, the feature is available should it be requested.

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		const secret = process.env.JWT_SECRET;

		jwt.verify(token, secret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid credentials.', error: err });
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'No credentials provided.' });
	}
};
