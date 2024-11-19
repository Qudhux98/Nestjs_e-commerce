import { IsEmail, IsNotEmpty,IsNumber, IsOptional, IsString,MinLength} from "class-validator";

export class updateUserEntity {
    id?: number;
    name?: string;
    email?: string;
    tel?: string
  }

export class updateUserDto{
   @IsNumber()
   @IsOptional()
   id?: number;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
    name?: string;

   @IsEmail()
   @IsString()
   @IsOptional()
    email?: string;

  @IsString()
  @IsOptional()
    tel?: string
}