import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createProductDto } from '../../dtos/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService){
        // this.ProductsService = new ProductsService();
     }
  
     @ Get()
     getProducts(){
     
      return this.ProductsService.getAllproducts()
     }
     @Get(':id')
     getProductById(@Param('id', ParseIntPipe) id: number){
      console.log(typeof(id), id);
      return this.ProductsService.getProductById(id)
     
     }
  
     @Post()
     createProduct(@Body() Product: createProductDto){
        this.ProductsService.createProduct(Product)
      return "Product created successfully";
     }
     @Patch(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() Product){
  return this.ProductsService.updateProduct(id, Product)
  
  }
  @Delete(':id')
deleteCart(@Param('id', ParseIntPipe) id: number){
    return this.ProductsService.deleteCart(id)
}
}
