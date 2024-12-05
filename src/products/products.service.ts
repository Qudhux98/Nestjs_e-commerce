import { Injectable } from '@nestjs/common';
import { createProductDto} from '../../dtos/product.dto';
import { DataSource, EntityManager } from 'typeorm';
import Product from 'entities/product.entity';

// @Injectable()
// export class ProductsService{
//     products = products

//     getAllproducts(){
//         return this.products
//     }
// getProductById(id:number ){
//     return this.products.find(e=>e.id === id)
// }
// createProduct(Product: createProductEntity){
//     return this.products.push()
// }
// updateProduct(id: number, Product) {
//     const ProductForUpdate = this.products.find(e=>e.id === id)

//     const updatedProduct = {...ProductForUpdate, ...Product}
// this.products = this.products.map((u)=>(u.id===id?updatedProduct:u))
//     return updatedProduct
// }
// deleteCart(id: number){
//     const productForDelete = this.products.findIndex(e=>e.id === id)
//     if(productForDelete === -1){
//         return "Nothing to delete"
//     }
//     this.products.splice(0, 1)

//     return "deleted successfully"

// }
// }

@Injectable()
export class ProductService {
  private dbManager: EntityManager;
  constructor(private readonly datasource: DataSource) {
    this.dbManager = datasource.manager;
  }

  async create(product: createProductDto): Promise<Product> {
    const newProduct = this.dbManager.create(Product, product);
    const saveProduct = await this.dbManager.save(newProduct);
    return saveProduct;
  }

  async all_product(): Promise<Product[]> {
    const product = await this.dbManager.find(Product);
    return product;
  }

  async getProductDetails(productId: number): Promise<Product> {
    const product = await this.dbManager.findOne(Product, {
      where: { id: productId },
    });
    return product;
  }
}
