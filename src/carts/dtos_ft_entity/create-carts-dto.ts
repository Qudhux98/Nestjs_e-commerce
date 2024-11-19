import {IsNumber} from "class-validator";

export class createCartEntity {
  id: number;
  userId: number;
  productId: number;
  quantity: number
}

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