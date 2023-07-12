import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IAuthService } from './auth';
import { ROUTES, SERVICES } from './utils/types';
import { CreateUserDto } from './dtos/createUser.dto';
import { Services } from 'src/users/users/utils/types';
import { IUserService } from 'src/users/users/users';

@Controller(ROUTES.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICES.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    this.userService.createUser(createUserDto);
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Get('logout')
  logout() {}
}
