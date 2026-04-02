import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api")
app.useGlobalPipes(
  new ValidationPipe({
    disableErrorMessages: true,
  }),
);

    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, () => console.log(`Server is running on ${PORT} -PORT`));
    
  } catch (err) {
    console.log(`Server failed to start: ${err.message}`)
    process.exit(1);
  }
}
bootstrap();
