# gif-search

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Maintainability](https://api.codeclimate.com/v1/badges/26f95f37ddb169a39549/maintainability)](https://codeclimate.com/github/evoingram/gif-search/maintainability)

Search GIFs via the GIPHY API.

## Key Features

- GIF search web service
- 7 endpoints
- runs on port 8080
- uses Giphy API
- responses are in JSON
- returns either 0 or 5 results at a time

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm server
npm start
visit `localhost:8080` in web browser
```

## Usage

This project has two environments, staging and production:

`auto-deploys to staging` > `manually test/troubleshoot in staging` > `manually deploy to production via Heroku website`

- staging:     https://gif-search-elingram.herokuapp.com
- production:  https://gif-search-elingram-prod.herokuapp.com

### Tech Stack

Back end deployed to `Heroku` and built using:

- [Node.js](https://github.com/nodejs/node):  a JavaScript runtime.
- [Knex](https://github.com/knex/knex):  a query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.
- [Express](https://github.com/expressjs/express):  a fast, unopinionated, minimalist web framework for Node.
- [bcrypt](https://github.com/pyca/bcrypt/):  modern(-ish) password hashing for your software and your servers.
- [PostgreSQL](http://postgresql.org/):  open-source relational database supporting both SQL & JSON querying.

### Testing

- Endpoints have been tested and documented via both Jest & Postman.

## API (Documentation in progress)

[BASE URL](https://gif-search-elingram-prod.herokuapp.com/api)   |   [ENDPOINTS](https://github.com/evoingram/gif-search/blob/master/docs/endpoints.md)
### [POSTMAN DOCUMENTATION]()   |   [SAMPLE RESPONSE](https://github.com/evoingram/gif-search/blob/master/docs/sample-response.json)

- Postman Docs were last published on 01/16/2022.
- Postman docs contain examples of all get, post, and put endpoint body submissions AND responses.

## Maintainers

[@evoingram](https://github.com/evoingram)

## Contributing

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
