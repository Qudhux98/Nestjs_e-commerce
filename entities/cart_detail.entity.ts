import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import Cart from "./cart.entity";
import Product from "./product.entity";

@Entity()
export default class CartDetail {
    @PrimaryColumn()
    cartId: number;

    @PrimaryColumn()
    productId: number;

    @Column()
    amount: number;

    @Column()
    quantity: number;

     //relation
  @ManyToOne(() => Cart, (cart) => cart.cartProducts)
  @JoinColumn({ name: 'cartId' })
  cart: Cart;

  // @ManyToOne(() => Product, (product) => product.cartProducts)
  // @JoinColumn({ name: 'productId' })
  // products: Product;
}