import { user} from "../../db/data_source"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { createUserDto } from "dtos/create-user-dto"
import User from "entities/user.entity"
import { Repository } from "typeorm"

@Injectable()
export class UsersService{
    users = user

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}

    getAllUsers(){
        return this.userRepository.find()
    }
getUserById(id:number ){
    return this.userRepository.findOne({ where: { id } });
}
async createUser(user: createUserDto): Promise<User>{
    const newUser = this.userRepository.create(user)
    return await this.userRepository.save(newUser);
}
updateUser(id: number, user) {
    const userForUpdate = this.users.find(e=>e.id === id) 
    
    const updatedUser = {...userForUpdate, ...user}
this.users = this.users.map((u)=>(u.id===id?updatedUser:u))
    return updatedUser
}

}
