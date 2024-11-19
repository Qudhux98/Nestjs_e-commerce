import { IsDate,IsNumber, IsOptional, IsString} from "class-validator";

export class updaterderEntity {
  id?: number;
  userId?: number;
  totalPrice?: number;
  status?: string;
  createdAt?: Date;
}

export class updateOrderDto{
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsNumber()
  @IsOptional()
  totalPrice?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsDate()
  @IsOptional()
  createdAt?: Date;
}