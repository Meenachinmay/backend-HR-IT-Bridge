import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(32)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(32)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MaxLength(32)
  password: string;
}
