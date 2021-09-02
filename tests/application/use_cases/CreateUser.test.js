const User = require('../../../src/domain/User');
const UserRepository = require('../../../src/domain/UserRepository');
const mockUserRepository = new UserRepository();
const CreateUser = require('../../../src/application/use_cases/CreateUser');

test('should resolve with the newly persisted user (augmented with an ID)', async () => {
  // given
  const persistedUser = new User(1, 'Felipe', 'Salvador', 'teste@gmail.com', 'P@s$W0rD');
  mockUserRepository.persist = jest.fn(() => persistedUser);

  // when
  const user = await CreateUser('Felipe', 'Salvador', 'teste@gmail.com', 'P@s$W0rD', { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.persist).toHaveBeenCalledWith(new User(null, 'Felipe', 'Salvador', 'teste@gmail.com', 'P@s$W0rD'));
  expect(user).toEqual(persistedUser);
});
