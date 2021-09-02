'use strict';

const UsersController = require('../controllers/UsersController');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/users',
        handler: UsersController.findUsers,
        options: {
          description: 'Lista todos os usuários',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/users',
        handler: UsersController.createUser,
        options: {
          description: 'Insere um usuário',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/users/{id}',
        handler: UsersController.getUser,
        options: {
          description: 'Busca um usuário pelo {id}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/users/{id}',
        handler: UsersController.deleteUser,
        options: {
          description: 'Deleta um usuário',
          tags: ['api'],
        },
      },
    ]);
  }
};