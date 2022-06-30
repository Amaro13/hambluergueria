import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product name',
    example: 'Hamburguer Bacon XL',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Description',
    example:
      'Burguer with grilled bacon and extra cheese.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Product Price.',
    example: 21.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Product image link.',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;
}