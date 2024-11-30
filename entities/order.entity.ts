
// export default class Order {
//     id: string;

import Cart from "./cart.entity";

//     userId: string;

//     totalAmount: string;

//     isPaid: boolean;

//     isDelivered: boolean;
// }

// export class OrderDetail {
//     orderId: string;

//     productId: string;

//     quantity: number;

//     amount: string;
// }

// ONE-ONE RELATIONSHIP TO CART
export default class Order {
    cartId?: number;

    isPaid: boolean;

    isDelivered: boolean;

    cart: Cart;
}