import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("api");

  
    const config = new DocumentBuilder()
      .setTitle('My API')
      .setDescription('API documentation')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document); 

    const PORT = process.env.PORT ?? 3000;
    await app.listen(PORT);

    console.log(`Server is running on ${PORT}-PORT`);
    console.log(`Swagger: http://localhost:${PORT}/api/docs`);
    
  } catch (err) {
    console.log(`Server failed to start: ${err.message}`);
  }
}

bootstrap();
