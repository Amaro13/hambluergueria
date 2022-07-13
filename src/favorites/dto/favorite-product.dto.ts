import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavoriteProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'User`s id that is favoriting',
    example: 'f11b0958-efa2-4b4f-9b84-36633e5529b8',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of the product that is favoriting',
    example: 'hamburguer Salada',
  })
  productName: string;
}