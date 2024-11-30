import CartDetail from "./user";

export default class Cart {
    id: number;

    userId: number;

    totalAmount: number;

    cartDetails: CartDetail[];
}


export class updateCartEntity {
    id?: number;
    userId?: number;
    totalAmount?: number;
    cartDetails?: CartDetail[];
  }