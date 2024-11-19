
import { IsEmail, IsNotEmpty,IsNumber, IsOptional, IsString,MinLength} from "class-validator";

export class updateProductEntity {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number
}

export class updateProductDto{
   @IsOptional()
   @IsNumber()
   id?: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name?: string;

    @IsString()
    @IsOptional()
    description?: string

    @IsNumber()
    @IsOptional()
    price?: number

    @IsNumber()
    @IsOptional()
    quantity?: number
}