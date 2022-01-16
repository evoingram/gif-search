
// User/password validation is NOT required on any routes.
// However, the feature is available should it be requested.

const validateUser = (user) => {
	const errors = [];

	if (!user.username || user.username.length < 8) {
		errors.push('Username must contain at least 8 characters');
	}

	if (!user.password && user.password.length < 8 && (/\d/.test(user.password)) && (/[A-Z]/.test(user.password))) {
		errors.push('Password must contain at least 8 characters, at least one of which must be a number and a capital letter');
	}

	return {
		isSuccessful: !(errors.length > 0),
		errors
	};
};

module.exports = {
	validateUser
};
