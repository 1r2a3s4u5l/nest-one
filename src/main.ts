import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { ValidationPipe } from "./pipe/validation.pipe";

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030;
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('Set-One Project')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NestJS, Postgres, Sequelize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => {
      console.log(`server ${PORT} da ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
