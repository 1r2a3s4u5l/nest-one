import { User } from '../../../users/models/user.models';

export const userStub = (): Partial<User> => {
  return {
    id: 1,
    name: 'user1',
    email: 'user1@gmail.com',
    password: '123456',
    is_active: true,
  };
};
