import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./product.entity";
import Cart from "./cart.entity";
// import { Roles } from "utility/common/user.roles.enum";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    phone: string;

    @Column()
    email: string;
    @Column()
    passwordHash?: string;

    @CreateDateColumn()
    createdAt: Date

  //relation


  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart;

    // @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})

    // @Column({type: 'enum', enum:Roles, array:true, default:[Roles.USER]})
    // role: Roles[]
}