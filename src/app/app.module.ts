import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { CartsModule } from 'src/carts/carts.module';
import { OrdersModule } from 'src/orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, ProductsModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
