import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  //This document builder sets the tittle, description, version, and tags for the document, and in the end it builds.
  const config = new DocumentBuilder()
    .setTitle('Hambluergueria Blue')
    .setDescription('API of Blue`s Burguer Place')
    .setVersion('1.0.0')
    .addTag('users')
    .addTag('products')
    .addTag('status')
    .addTag('tables')
    .addTag('categories')
    .addTag('orders')
    .addTag('favorites')
    .addTag('auth')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
