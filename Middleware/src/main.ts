import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalMiddlewareOne, globalMiddlewareTwo, serverMiddleware } from './app.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne, globalMiddlewareTwo, serverMiddleware)
  await app.listen(3000);
}
bootstrap();
