import { Users } from "db/data_source"
import {updateUserEntity } from "./dtos_ft_entity/update-user-dto"
import { Injectable } from "@nestjs/common"
import {createUserEntity} from "./dtos_ft_entity/create-user-dto"

@Injectable()
export class UsersService{
    users = Users

    getAllUsers(){
        return this.users
    }
getUserById(id:number ){
    return this.users.find(e=>e.id === id)
}
createUser(user: createUserEntity){
    return this.users.push(user)
}
updateUser(id: number, user:updateUserEntity) {
    const userForUpdate = this.users.find(e=>e.id === id) 
    
    const updatedUser = {...userForUpdate, ...user}
this.users = this.users.map((u)=>(u.id===id?updatedUser:u))
    return updatedUser
}

}
