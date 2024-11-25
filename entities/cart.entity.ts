import CartDetail from "./cartDetail.entity";

export default class Cart {
    id: number;

    userId: number;

    productId: number;

    totalAmount: number;

    cartDetails: CartDetail[];
}


export class updateCartEntity {
    id?: number;
    userId?: number;
    totalAmount?: number;
    cartDetails?: CartDetail[];
  }