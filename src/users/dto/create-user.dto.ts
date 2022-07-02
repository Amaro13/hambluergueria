import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Amaro',
    description: 'Username to be created',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'stranger@outlook.com',
    description: 'Email to be created',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    // checks if the password is weak
    message: 'weak password',
  })
  @ApiProperty({
    example: '@Abc1234',
    description:
      'Password must have at least 1 lowercase, 1 uppercase, 1 simbol and 1 number.',
  })
  password: string;
}
