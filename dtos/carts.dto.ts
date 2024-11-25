import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString, IsOptional} from "class-validator";


export class createCartDto{
   @IsNumber()
   id: number;

   @IsNumber()
    userId: number

    @IsNumber()
    productId: number

    @IsNumber()
    quantity: number
}


export class updateCartDto extends PartialType(createCartDto){ 
  
  
}



export class AddToCartDto {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNumber()
  @IsOptional()
  cartId?: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}

