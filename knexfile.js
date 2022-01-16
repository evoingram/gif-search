module.exports = {

	development: {
		client: 'pg',
		connection: 'postgres://localhost/gifSearchDB',
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		pool: {
			min: 2,
			max: 10
		}
	},

	staging: {
		client: 'pg',
		connection: process.env.DATABASE_URL_STAGING,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		pool: {
			min: 2,
			max: 10
		}
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL_PRODUCTION,
		migrations: {
			directory: './data/migrations'
		},
		pool: {
			min: 2,
			max: 10
		}
	}

};
