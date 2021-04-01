const knex = require('knex');
const configuration = require('../../knexfile');

const ambient = (process.env.NODE_ENV === 'test' ? configuration.test : configuration.development);

module.exports = knex(ambient);
