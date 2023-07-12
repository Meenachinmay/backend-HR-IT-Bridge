import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth/auth.module';
import { UsersModule } from './users/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users/entities/User.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT),
      synchronize: true,
      entities: [User],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
