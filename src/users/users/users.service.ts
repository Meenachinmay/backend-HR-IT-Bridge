import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './users';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDetails } from './utils/types';
import { hashPassword } from 'src/helpers';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {

    // find if the user is already exists
    const findUser = await this.userRepository.findOneBy({
      email: userDetails.email,
    });

    // throw error
    if (findUser) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    // hash the password and create, save and return the user
    const password = await hashPassword(userDetails.password);
    const newUser = this.userRepository.create({ ...userDetails, password });
    await this.userRepository.save(newUser);

    return newUser;
  }
}
