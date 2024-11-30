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

   @ Get('users')
   getUsers(){
   
    return this.usersService.getAllUsers()
   }
   @Get(':id')
   getUserById(@Param('id', ParseIntPipe) id: number){
    console.log(typeof(id), id);
    return this.usersService.getUserById(id)
   
   }

   @Post('user')
   async createUser(@Body() user: createUserDto){
      return await this.usersService.createUser(user)
    
   }
   @Patch(':id')
updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: updateUserDto){
return this.usersService.updateUser(id, user)

}

}