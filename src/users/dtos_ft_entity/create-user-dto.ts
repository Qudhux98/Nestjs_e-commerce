import { IsEmail, IsNotEmpty,IsNumber, IsString,MinLength} from "class-validator";

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

   @IsEmail()
   @IsString()
    email: string;

  @IsString()
    password: string
}