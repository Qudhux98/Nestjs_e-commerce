import { Injectable } from '@nestjs/common';
import { Products } from 'db/data_source';
import { createProductEntity } from './dtos_ft_entity/create-product-dto';
import { updateProductEntity } from './dtos_ft_entity/update-product-dto';


@Injectable()
export class ProductsService{
    products = Products

    getAllproducts(){
        return this.products
    }
getProductById(id:number ){
    return this.products.find(e=>e.id === id)
}
createProduct(Product: createProductEntity){
    return this.products.push(Product)
}
updateProduct(id: number, Product:updateProductEntity) {
    const ProductForUpdate = this.products.find(e=>e.id === id) 
    
    const updatedProduct = {...ProductForUpdate, ...Product}
this.products = this.products.map((u)=>(u.id===id?updatedProduct:u))
    return updatedProduct
}

}
