import { user} from "../../db/data_source"
import { Injectable } from "@nestjs/common"
import User from "entities/user.entity"

@Injectable()
export class UsersService{
    users = user

    getAllUsers(){
        return this.users
    }
getUserById(id:number ){
    return this.users.find(e=>e.id === id)
}
createUser(user: User){
    return this.users.push(user)
}
updateUser(id: number, user) {
    const userForUpdate = this.users.find(e=>e.id === id) 
    
    const updatedUser = {...userForUpdate, ...user}
this.users = this.users.map((u)=>(u.id===id?updatedUser:u))
    return updatedUser
}

}
