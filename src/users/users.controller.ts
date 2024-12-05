import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UserService} from "./users.service";
import { createUserDto } from "../../dtos/create-user-dto";
import { updateUserDto } from "../../dtos/create-user-dto"
import User from "entities/user.entity";

// @Controller('users')
// export class UsersController{
//    // usersService: UsersService


//    constructor(private usersService: UsersService){
//       // this.usersService = new UsersService();
//    }

//    @ Get('users')
//    getUsers(){
   
//     return this.usersService.getAllUsers()
//    }
//    @Get(':id')
//    getUserById(@Param('id', ParseIntPipe) id: number){
//     console.log(typeof(id), id);
//     return this.usersService.getUserById(id)
   
//    }

//    @Post('user')
//    async createUser(@Body() user: createUserDto){
//       return await this.usersService.createUser(user)
    
//    }
//    @Patch(':id')
// updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: updateUserDto){
// return this.usersService.updateUser(id, user)

// }

// }

@Controller('users')
export class UserController {
  constructor(
   //  private authService: AuthService,
    private UsersService: UserService,
  ) {}

  @Post('signup')
  async signup(
    @Body() userSignUpDto: createUserDto,
  ): Promise<User> {
    return this.UsersService.createUser(userSignUpDto);
  }

//   @Post('signin')
//   signin(
//     @Body() userSignInDto: createUserDto,
//   ): Promise<{ user: User; verifyT: string }> {
//     return this.authService.signin(userSignInDto);
//   }

  @Get('view-all-user')
  async getAllUsers(): Promise<User[]> {
    const allUser = await this.UsersService.getUsers();
    return allUser;
  }

  @Get(':id')
  async getUser(@Param('id') userId: number): Promise<User> {
    const user = await this.UsersService.getUserById(userId);
    if (user) {
      return user;
    }
  }
}
