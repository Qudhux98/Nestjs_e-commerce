import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsOptional, IsNotEmpty,IsNumber, IsString,MinLength} from "class-validator";

export class createUserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class createUserDto{
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  phone: string;

  @IsEmail()
   @IsString() 
  email: string;

  @IsString()
  passwordHash?: string;
   
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