import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "../../dtos/create-user-dto";
import { updateUserDto } from "../../dtos/create-user-dto"

@Controller('users')
export class UsersController{
   // usersService: UsersService


   constructor(private usersService: UsersService){
      // this.usersService = new UsersService();
   }

   @ Get()
   getUsers(){
   
    return this.usersService.getAllUsers()
   }
   @Get(':id')
   getUserById(@Param('id', ParseIntPipe) id: number){
    console.log(typeof(id), id);
    return this.usersService.getUserById(id)
   
   }

   @Post()
   createUser(@Body() user: createUserDto){
      this.usersService.createUser(user)
    return "user created successfully";
   }
   @Patch(':id')
updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: updateUserDto){
return this.usersService.updateUser(id, user)

}

}