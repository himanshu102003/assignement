import { IsString, IsEmail, Length } from 'class-validator';

/**
 * DTO for creating a new user.
 */
export class CreateUserDto {
  @IsString()
  @Length(4, 20)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 20)
  password: string;
}
