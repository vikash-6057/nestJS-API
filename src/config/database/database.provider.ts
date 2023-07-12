import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: process.env.DB_TYPE as 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
            });
            return dataSource.initialize();
        },
    },
];