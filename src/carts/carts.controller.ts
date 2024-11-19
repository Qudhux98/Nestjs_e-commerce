import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { updateCartDto } from "./dtos_ft_entity/update-cart-dto copy";
import { createCartDto } from "./dtos_ft_entity/create-carts-dto";


@Controller('carts')
export class CartsController{
   // CartsService: CartsService


   constructor(private cartsService: CartsService){
      // this.CartsService = new CartsService();
   }
   @Get()
   getCartLength(){
    return this.cartsService.cartLength()
   }
   @ Get('view-carts')
   getCarts(){
   
    return this.cartsService.getAllCarts()
   }
   @Get(':id')
   getCartById(@Param('id', ParseIntPipe) id: number){
    return this.cartsService.getCartById(id)
   
   }

   @Post()
   createCart(@Body() cart: createCartDto){
      return this.cartsService.createCart(cart)

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