import { PartialType } from "@nestjs/mapped-types";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber,IsOptional} from "class-validator";


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



export class GetOrderDto {
  @Transform (({value})=> value? parseInt(value, 10): undefined)
  @IsOptional()
  @IsNumber()
  cartId?: number;

  @Transform (({value})=> parseInt(value, 10))
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
