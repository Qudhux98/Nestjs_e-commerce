import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createProductDto } from '../../dtos/product.dto';
import { ProductService} from './products.service';
import Product from 'entities/product.entity';

// @Controller('products')
// export class ProductsController {

//     constructor(private ProductsService: ProductsService){
//         // this.ProductsService = new ProductsService();
//      }
  
//      @ Get()
//      getProducts(){
     
//       return this.ProductsService.getAllproducts()
//      }
//      @Get(':id')
//      getProductById(@Param('id', ParseIntPipe) id: number){
//       console.log(typeof(id), id);
//       return this.ProductsService.getProductById(id)
     
//      }
  
//      @Post()
//      createProduct(@Body() Product: createProductDto){
//         this.ProductsService.createProduct(Product)
//       return "Product created successfully";
//      }
//      @Patch(':id')
//   updateProduct(@Param('id', ParseIntPipe) id: number, @Body() Product){
//   return this.ProductsService.updateProduct(id, Product)
  
//   }
//   @Delete(':id')
// deleteCart(@Param('id', ParseIntPipe) id: number){
//     return this.ProductsService.deleteCart(id)
// }
// }

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create-product')
  async create(@Body() productDto: createProductDto): Promise<Product> {
    const product = await this.productService.create(productDto);
    return product;
  }

  @Get('view-all-product')
  async getAll_product(): Promise<Product[]> {
    const products = await this.productService.all_product();
    return products;
  }
  @Get('product/:id')
  async getProduct(@Param('id') productId: number): Promise<Product> {
    const product = await this.productService.getProductDetails(productId);
    return product;
  }
}