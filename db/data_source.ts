import { createCartEntity } from "src/carts/dtos_ft_entity/create-carts-dto";
import { createOrderEntity } from "src/orders/dtos_ft_entity/create-order-dto";
import { createProductEntity } from "src/products/dtos_ft_entity/create-product-dto";
import {createUserEntity} from "src/users/dtos_ft_entity/create-user-dto";

export const Users: createUserEntity[]= [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: "securePass!456"
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      password: "Alice@789"
    },
    {
      id: 4,
      name: "Bob Williams",
      email: "bobwilliams@example.com",
      password: "BobSecure#321"
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emilydavis@example.com",
      password: "EmilySafe987"
    }
  ];
  

  
export const Products = [
    {
      id: 1,
      name: "Wireless Mouse",
      description: "A sleek and ergonomic wireless mouse with adjustable DPI.",
      price: 25.99,
      quantity: 50
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      description: "A durable mechanical keyboard with customizable RGB lighting.",
      price: 75.49,
      quantity: 30
    },
    {
      id: 3,
      name: "USB-C Hub",
      description: "A multi-port USB-C hub with HDMI, USB 3.0, and SD card slots.",
      price: 39.99,
      quantity: 20
    },
    {
      id: 4,
      name: "Noise Cancelling Headphones",
      description: "Over-ear headphones with active noise cancellation and superior sound quality.",
      price: 199.99,
      quantity: 15
    },
    {
      id: 5,
      name: "External SSD",
      description: "A high-speed portable SSD with 1TB storage capacity.",
      price: 109.99,
      quantity: 25
    }
  ];
  

  export let Cart: createCartEntity[] = []
  export let Order: createOrderEntity[] = []

