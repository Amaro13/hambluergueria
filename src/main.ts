import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  //This document builder sets the tittle, description, version, and tags for the document, and in the end it builds.
  const config = new DocumentBuilder()
    .setTitle('Hambluergueria Blue')
    .setDescription('API of Blue`s Burguer Place')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('users')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
