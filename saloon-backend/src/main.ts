import { NestFactory } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { AppModule } from './app.module';

async function bootstrap() {
  const prisma = new PrismaClient().$extends(withAccelerate());
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
