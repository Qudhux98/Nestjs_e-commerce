import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import CartDetail from './cart_detail.entity';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @Column()
  price: number;

  //relation
  // @OneToMany(() => CartDetail, (cartProduct) => cartProduct.products)
  // cartProducts: CartDetail[];
}
