if (!process.env.__IS_DEV__) {
	require('module-alias/register')
}

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(4200)
}
bootstrap()
