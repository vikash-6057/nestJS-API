import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    
    DatabaseModule,
    // TypeOrmModule.forRoot({
    //   entities: [__dirname + '/../**/*.entity.ts'],
    // }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
