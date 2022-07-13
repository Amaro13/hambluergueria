import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderToProductDto } from './create-order-to-product.dto';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Number of the table that made the order',
    example: 10,
  })
  tableNumber: number;

  @IsUUID()
  @ApiProperty({
    description: 'User Id that made the order',
    example: '63d3d4cf-be70-4b86-830e-e14305dd328c',
  })
  userId: string;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderToProductDto)
  @ApiProperty({
    description: `List of id's and quantities of products that are getting asked`,
    type: [CreateOrderToProductDto],
  })
  products: CreateOrderToProductDto[];
}
