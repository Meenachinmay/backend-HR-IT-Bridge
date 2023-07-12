import { Injectable } from '@nestjs/common';
import { IUserService } from './users';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser() {
    console.log('User service to create a user.');
  }
}
