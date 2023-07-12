import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SERVICES } from './utils/types';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
