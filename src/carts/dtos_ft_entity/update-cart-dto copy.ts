import { IsNumber, IsOptional} from "class-validator";


export class updateCartEntity {
  id?: number;
  userId?: number;
  productId?: number;
  quantity?: number
}

export class updateCartDto{
   @IsNumber()
   @IsOptional()
   id?: number;

   @IsNumber()
   @IsOptional()
    userId?: number

    @IsNumber()
    @IsOptional()
    productId?: number

    @IsNumber()
    @IsOptional()
    quantity?: number
}

