import Cart from 'entities/cart.entity';
import Order from 'entities/order.entity';
import Product from 'entities/product.entity';
import User from 'entities/user.entity';

export const user: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '0908768765',
    passwordHash: 'password123',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '0908768765',
    passwordHash: 'securePass!456',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    phone: '09075803023',
    passwordHash: 'Alice@789',
  },
  {
    id: 4,
    name: 'Bob Williams',
    email: 'bobwilliams@example.com',
    phone: '0908768765',
    passwordHash: 'BobSecure#321',
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    phone: '0908768765',
    passwordHash: 'EmilySafe987',
  },
];

export const products: Product[]=[
  {
    id: 1,
    name: 'Wireless Mouse',
    description: 'A sleek and ergonomic wireless mouse with adjustable DPI.',
    price: 25.99,
    quantity: 50,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description:
      'A durable mechanical keyboard with customizable RGB lighting.',
    price: 75.49,
    quantity: 30,
  },
  {
    id: 3,
    name: 'USB-C Hub',
    description:
      'A multi-port USB-C hub with HDMI, USB 3.0, and SD card slots.',
    price: 39.99,
    quantity: 20,
  },
  {
    id: 4,
    name: 'Noise Cancelling Headphones',
    description:
      'Over-ear headphones with active noise cancellation and superior sound quality.',
    price: 199.99,
    quantity: 15,
  },
  {
    id: 5,
    name: 'External SSD',
    description: 'A high-speed portable SSD with 1TB storage capacity.',
    price: 109.99,
    quantity: 25,
  },
];

export const carts: Cart[] = [];

export const orders: Order[] = [];


