import { JwtService } from '@nestjs/jwt';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { Test } from '@nestjs/testing';
import { User } from '../models/user.models';
import { userStub } from './stubs/user.stub';
import { CreateUserDto } from '../dto/create-user.dto';
import { AppModule } from 'src/app.module';

jest.mock('../users.service');
describe('User controller', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      // imports:[AppModule],
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });
  it('should be defined usersController', () => {
    expect(usersController).toBeDefined();
  });
  it('should be defined usersService', () => {
    expect(usersService).toBeDefined();
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
        };
        user = await usersController.createUser(createUserDto);
        console.log(user);
      });

      it('then it should call usersService', () => {
        expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      });
      it('then it should return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getOneUser', () => {
    describe('when getOneUser is called', () => {
      let user: User;
      beforeEach(async () => {
        user = await usersController.getOneUser(userStub().id + '');
      });

      it('then it should call usersService', () => {
        expect(usersService.getOneUser).toHaveBeenCalledWith(userStub().id);
      });
      it('then it should return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getAllUser', () => {
    describe('when getAllUser is called', () => {
      let users: User[];
      beforeEach(async () => {
        users = await usersController.getAllUsers();
      });

      test('then it should call usersService', () => {
        expect(usersService.getAllUsers).toBeCalled();
      });
      test('then it should return user', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe('DeleteUser', () => {
    describe('when DeleteUser is called', () => {
      let res: Object;
      beforeAll(async () => {
        res = await usersController.deleteUserById(userStub().id + '');
      });

      it('then it should call usersService', () => {
        expect(usersService.deleteUserById).toBeCalledWith(userStub().id);
      });
      it('then it should return user', () => {
        expect(res).toEqual({ message: 'Foydalanuvchi ochirildi' });
      });
    });
  });
});
