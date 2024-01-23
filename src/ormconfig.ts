import { DataSourceOptions } from 'typeorm'

const config: DataSourceOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'itblog_admin',
	password: '12345',
	database: 'itblog_db',
	entities: [__dirname + '/**/*.entity{.ts,.js}'],
	synchronize: true,
}

export default config
