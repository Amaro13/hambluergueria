import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Ivan',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'ivan@blue.com',
  })
  email: string;
}