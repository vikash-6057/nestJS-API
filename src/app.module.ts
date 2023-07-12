import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    ArticleModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
