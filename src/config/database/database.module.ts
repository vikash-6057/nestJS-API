import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { User } from 'src/modules/user/entities/user.entity';

type DBDriver = 'mysql' | 'postgres'

console.log('paths')
console.log(join(__dirname,'../../*/**/.entity{.ts,.js}'))

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [],
            useFactory: () => ({
                type: process.env.DB_TYPE as DBDriver,
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: ['./dist/*/*/*/*.entity.js'],
                // entities: [join(__dirname,'../../*/**/.entity{.ts,.js}')],
                // entities:[User],
                ssl: {
                    rejectUnauthorized: false,
                },
                synchronize: true, //should be false at production!
            }),
        }),
    ],
})
export class DatabaseModule { }