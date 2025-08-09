import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule  );
    app.useGlobalPipes(new ValidationPipe());
    const PORT = process.env.PORT ?? 3000;
    console.log(`app is running on port ${PORT}`);
    await app.listen(PORT);
}
bootstrap();
