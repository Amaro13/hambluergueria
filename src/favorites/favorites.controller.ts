import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoriteProductDto } from './dto/favorite-product.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesService } from './favorites.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('favorites')
@ApiBearerAuth()
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiOperation({
    summary: 'Favorite a product',
  })
  favoriteProduct(@Body() dto: FavoriteProductDto): Promise<Favorite> {
    return this.favoritesService.favoriteProduct(dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Unfavorite a product',
  })
  unfavoriteProduct(@Param('id') id: string) {
    return this.favoritesService.unfavoriteProduct(id);
  }

  @Get('user/:id')
  @ApiOperation({
    summary: 'List of favorite products of the id',
  })
  getUserFavorites(@Param('id') id: string): Promise<Favorite[]> {
    return this.favoritesService.getUserFavorites(id);
  }

  @Get('product/:id')
  @ApiOperation({
    summary: 'List of users that favorited the product',
  })
  getUsersWhoFavoritedProduct(@Param('id') id: string) {
    return this.favoritesService.getUsersWhoFavoritedProduct(id);
  }
}