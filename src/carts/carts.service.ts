import { Injectable } from '@nestjs/common';
import { Cart, Products } from 'db/data_source';
import { createCartDto, createCartEntity } from './dtos_ft_entity/create-carts-dto';
import { updateCartEntity } from './dtos_ft_entity/update-cart-dto copy';
import { createOrderDto } from 'src/orders/dtos_ft_entity/create-order-dto';



@Injectable()
export class CartsService{
    carts = Cart
    products = Products;
    // products = Products

    getAllCarts(){
        return this.carts
    }
getCartById(id:number ){
    return this.carts.find(e=>e.id === id)
}
createCart(cart: createCartEntity){
    const checkQuantity = this.products.find(e => e.id === cart.productId)

    if(checkQuantity.quantity>=cart.quantity){
    checkQuantity.quantity = checkQuantity.quantity - cart.quantity
    this.carts.push(cart)
    return "Cart successfully added"
}
return "Quantity available exceeded"
}
cartLength(){
    return this.carts.length
}
updateCart(id: number, cart:updateCartEntity) {
    const cartForUpdate = this.carts.find(e=>e.id === id) 
    
    const updatedCart = {...cartForUpdate, ...cart}
this.carts= this.carts.map((u)=>(u.id===id?updatedCart:u))
    return updatedCart
}
deleteCart(id: number){
    const cartForDelete = this.carts.findIndex(e=>e.id === id)
    if(cartForDelete === -1){
        return "Nothing to delete"
    }
    this.carts.splice(0, 1)
    
    return "deleted successfully"
    
}

}
