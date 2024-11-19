import { Injectable } from '@nestjs/common';
import { Order } from 'db/data_source';
import { createOrderEntity } from './dtos_ft_entity/create-order-dto';
import { updateOrderDto } from './dtos_ft_entity/update-order-dto';


@Injectable()
export class OrdersService{
    orders = Order

    getAllorders(){
        return this.orders
    }
getUserById(id:number ){
    return this.orders.find(e=>e.id === id)
}
createUser(user: createOrderEntity){
    return this.orders.push(user)
}
updateUser(id: number, order:updateOrderDto) {
    const userForUpdate = this.orders.find(e=>e.id === id) 
    
    const updatedUser = {...userForUpdate, ...order}
this.orders = this.orders.map((u)=>(u.id===id?updatedUser:u))
    return updatedUser
}

}
