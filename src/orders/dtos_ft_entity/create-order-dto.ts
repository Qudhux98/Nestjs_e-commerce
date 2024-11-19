import { IsDate, IsEmail, IsNotEmpty,IsNumber, IsString,MinLength} from "class-validator";

export class createOrderEntity {
  id: number;
  userId: number;
  totalPrice: number;
  status: string;
  createdAt: Date;
}

export class createOrderDto{
  @IsNumber()
  id: number;

  // @IsNumber()
  // userId: number;

  // @IsNumber()
  // totalPrice: number;

  @IsNumber()
  quantity: number;

  // @IsDate()
  // createdAt: Date;
}