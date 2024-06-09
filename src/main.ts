import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT;

	app.enableCors();
	app.setGlobalPrefix('/api');

	await app.listen(port, () =>
		new Logger().log(`Application started on port ${port}`, 'NestApplication')
	);
}
bootstrap();
