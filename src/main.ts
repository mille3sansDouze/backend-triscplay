import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://127.0.0.1:5500"
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Enlève les champs non définis dans le DTO
      forbidNonWhitelisted: true, // Lève une erreur si des champs supplémentaires sont envoyés
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('TriscPlay API')
    .setDescription("Documentation de l'API TriscPlay")
    .setVersion('1.0')
    .addApiKey(
      { type: 'apiKey', in: 'header', name: 'x-session-id' },
      'session-id',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();