import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Services } from './utils/types';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
