import { Injectable } from '@nestjs/common';
import { products } from '../../db/data_source';
import { createProductEntity } from '../../dtos/product.dto';


@Injectable()
export class ProductsService{
    products = products

    getAllproducts(){
        return this.products
    }
getProductById(id:number ){
    return this.products.find(e=>e.id === id)
}
createProduct(Product: createProductEntity){
    return this.products.push(Product)
}
updateProduct(id: number, Product) {
    const ProductForUpdate = this.products.find(e=>e.id === id) 
    
    const updatedProduct = {...ProductForUpdate, ...Product}
this.products = this.products.map((u)=>(u.id===id?updatedProduct:u))
    return updatedProduct
}
deleteCart(id: number){
    const productForDelete = this.products.findIndex(e=>e.id === id)
    if(productForDelete === -1){
        return "Nothing to delete"
    }
    this.products.splice(0, 1)
    
    return "deleted successfully"
    
}
}
