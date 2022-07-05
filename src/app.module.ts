import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { TablesModule } from './tables/tables.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, ProductModule, TablesModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
