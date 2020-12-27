import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 정의 된 모델만 통과
      forbidNonWhitelisted: true, // 정해 진 모델이 아닌 경우 에러로 리턴
      transform: true, // 타입 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
