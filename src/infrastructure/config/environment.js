'use strict';

const constants = require('./constants');

module.exports = (() => {

  const environment = {
    database: {
      dialect: constants.SUPPORTED_DATABASE.IN_MEMORY,
      url: process.env.DATABASE_URI || '',
    }
  };

  if (process.env.NODE_ENV === 'test') {
      environment.database = {
        driver: constants.SUPPORTED_DATABASE.IN_MEMORY
      }
  }
  return environment;
})();
