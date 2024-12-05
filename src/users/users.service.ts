
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { createUserDto } from 'dtos/create-user-dto';
import User from 'entities/user.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
import bcrypt from 'bcrypt';

// @Injectable()
// export class UsersService{
//     users = user

//     constructor(
//         @InjectRepository(User)
//         private readonly userRepository: Repository<User>,
//       ) {}

//     getAllUsers(){
//         return this.userRepository.find()
//     }
// getUserById(id:number ){
//     return this.userRepository.findOne({ where: { id } });
// }
// async createUser(user: createUserDto): Promise<User>{
//     const newUser = this.userRepository.create(user)
//     return await this.userRepository.save(newUser);
// }
// updateUser(id: number, user) {
//     const userForUpdate = this.users.find(e=>e.id === id)

//     const updatedUser = {...userForUpdate, ...user}
// this.users = this.users.map((u)=>(u.id===id?updatedUser:u))
//     return updatedUser
// }

// }

@Injectable()
export class UserService {
  private dbManager: EntityManager;
  constructor(private readonly datasource: DataSource) {
    this.dbManager = datasource.manager;
  }

  async createUser(userSignUpDto: createUserDto): Promise<User> {
    const { passwordHash } = userSignUpDto;

    const existingUser = await this.dbManager.findOne(User, {
      where: {
        email: userSignUpDto.email,
      },
    });
    if (existingUser) {
      throw new ConflictException('Email already exist!!');
    }
    // const hash = bcrypt.hashSync(passwordHash, 10);

    const newUser = this.dbManager.create(User, userSignUpDto);

    const savedNewUser = await this.dbManager.save(newUser);

    if (!savedNewUser) {
      throw new BadRequestException(' No user was created');
    }
    return savedNewUser;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.dbManager.findOne(User, {
      where: {
        email: email,
      },
    });

    return user;
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.dbManager.findOneBy(User, { id: userId });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.dbManager.find(User, {
      select: ['name', 'email'],
    });
    return users;
  }
}
