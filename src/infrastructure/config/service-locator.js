'use strict';

const constants = require('./constants');
const environment = require('./environment');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');

function buildBeans() {
  const beans = {
    userSerializer: new UserSerializer(),
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
    beans.userRepository = new UserRepositoryInMemory();
  } 
  else {
    const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
    beans.userRepository = new UserRepositorySQLite();
  }
  return beans;
}

module.exports = buildBeans();
