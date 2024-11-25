import { IsEmail, IsNotEmpty,IsNumber, IsString,MinLength} from "class-validator";

export class createProductEntity {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number
}

export class createProductDto{
   @IsNumber()
   id: number;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

   @IsString()
    description: string

    @IsNumber()
    price: number

    @IsNumber()
    quantity: number
}