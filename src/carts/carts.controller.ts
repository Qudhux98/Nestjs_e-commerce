import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { updateCartDto } from '../../dtos/carts.dto';
import { AddToCartDto} from "../../dtos/carts.dto";


@Controller('carts')
export class CartsController{
   // CartsService: CartsService


   constructor(private cartsService: CartsService){
      // this.CartsService = new CartsService();
   }

   @Post()
   addToCart(@Body() cartDto: AddToCartDto) {
      return this.cartsService.addToCart(cartDto)
   }
   
   @Get(':userId/:cartId')
   checkout(@Param('userId', ParseIntPipe) userId: number, @Param('cartId', ParseIntPipe) cartId: number){
      return this.cartsService.checkout(userId, cartId)
   }
   @Get('order/:userId/:cartId?')
   getOrders(@Param('userId', ParseIntPipe) userId: number, @Param('cartId', ParseIntPipe) cartId: number){
      return this.cartsService.getOrders(userId, cartId)
   }

   @ Get('view-carts')
   getCarts(){
    return this.cartsService.getAllCarts()
   }
   
   @Get(':id')
   getCartById(@Param('id', ParseIntPipe) id: number){
    return this.cartsService.getCartById(id)
   
   }
   @Patch(':id')
updateCart(@Param('id', ParseIntPipe) id: number, @Body() cart: updateCartDto){
return this.cartsService.updateCart(id, cart)

}

@Delete(':id')
deleteCart(@Param('id', ParseIntPipe) id: number){
    return this.cartsService.deleteCart(id)
}

}