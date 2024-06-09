import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT;

	app.enableCors();
	app.setGlobalPrefix('/api');

	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

	await app.listen(port, () =>
		new Logger().log(`Application started on port ${port}`, 'NestApplication')
	);
}
bootstrap();
