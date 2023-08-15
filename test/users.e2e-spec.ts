import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('User (e2e)', () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admin@mail.uz',
        password: '12345',
      });
    token = response.body.token;
    console.log(token);
  });
  //   it('/users(GET) --> 200 OK', () => {
  //     return request(app.getHttpServer())
  //       .get('/users')
  //       .set('Authorization', `Bearer ${token}`)
  //       .expect('Content-Type', /json/)
  //       .expect(200);
  //   });

  //   it('users(GET) --> 401 "Unauthorized" error', () => {
  //     return request(app.getHttpServer())
  //       .get('/users')
  //       .expect('Content-Type', /json/)
  //       .expect(401);
  //   });

  //   it('auth/registration(POST) --> 201', async () => {
  //     return request(app.getHttpServer())
  //       .post('/auth/registration')
  //       .send({
  //         name: 'user22',
  //         email: 'user22@mail.uz',
  //         password: 'Uzbek1$t0n',
  //       })
  //       .expect('Content-Type', /json/)
  //       .expect(201)
  //       .then((response) => {
  //         expect(response.body).toMatchObject({
  //           token: expect.any(String),
  //         });
  //       });
  //   });

  //   it('auth/registration(POST) --> 400', () => {
  //     return request(app.getHttpServer())
  //       .post('/auth/registration')
  //       .send({
  //         name: 'user22',
  //         email: 'user22@mail.uz',
  //         password: 'Uzbek1$t0n',
  //       })
  //       .expect('Content-Type', /json/)
  //       .expect(400)
  //       .expect({
  //         statusCode: 400,
  //         message: 'Bunday foydalanuvchi mavjud',
  //       });
  //   });

  //   it('users(POST) --> 400 on Validation error', () => {
  //     return request(app.getHttpServer())
  //       .post('/users')
  //       .send({
  //         name: 'user2',
  //         password: '123456',
  //         email: 'user215@mail.uz',
  //       })
  //       .expect('Content-Type', /json/)
  //       .expect(400)
  //       .expect({
  //         statusCode: 400,
  //         message: ['password is not strong enough'],
  //         error: 'Bad Request',
  //       });
  //   });
  //   it('users/activate(POST) --> 200', () => {
  //     return request(app.getHttpServer())
  //       .post('/users/activate')
  //       .send({
  //         userId: 2,
  //       })
  //       .expect('Content-Type', /json/)
  //       .expect(200);
  //   });
  //   afterAll(async () => {
  //     await app.close();
  //   });
  it('users/activate(POST) --> 404', () => {
    return request(app.getHttpServer())
      .post('/users/activate')
      .send({
        userId: 282825,
      })
      .expect('Content-Type', /json/)
      .expect(404)
      .expect({
        statusCode: 404,
        message: 'Foydalanuvchi topilmadi',
      });
  });
  afterAll(async () => {
    await app.close();
  });
});
