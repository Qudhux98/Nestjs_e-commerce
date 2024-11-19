import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createProductDto } from './dtos_ft_entity/create-product-dto';
import { updateProductDto } from './dtos_ft_entity/update-product-dto';
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
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() Product: updateProductDto){
  return this.ProductsService.updateProduct(id, Product)
  
  }
}
