import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsOptional, IsNotEmpty,IsNumber, IsString,MinLength, IsDate} from "class-validator";
// import { Roles } from "utility/common/user.roles.enum";

export class createUserDto{
  
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
   @IsString() 
  email: string;

  @IsString()
  passwordHash?: string;


  // @IsString()
  //   roles: Roles[]
   
}

export class updateUserEntity {
    id?: number;
    name?: string;
    email?: string;
    tel?: string
  }

export class updateUserDto extends PartialType(createUserDto){
  //  @IsNumber()
  //  @IsOptional()
  //  id?: number;
    
  //   @IsString()
  //   @IsNotEmpty()
  //   @MinLength(3)
  //   @IsOptional()
  //   name?: string;

  //  @IsEmail()
  //  @IsString()
  //  @IsOptional()
  //   email?: string;

  // @IsString()
  // @IsOptional()
  //   tel?: string
}