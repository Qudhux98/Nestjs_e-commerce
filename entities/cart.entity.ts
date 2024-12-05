import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import CartDetail from "./cart_detail.entity";
import User from "./user.entity";


@Entity('carts')
export default class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    totalAmount: number;

    // relations
  @ManyToOne(() => User, (user) => user.cart)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => CartDetail, (cartProduct) => cartProduct.cart)
  cartProducts: CartDetail[];

  // items: any;
}


export class updateCartEntity {
    id?: number;
    userId?: number;
    totalAmount?: number;
    cartDetails?: CartDetail[];
  }