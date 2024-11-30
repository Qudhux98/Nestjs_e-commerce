import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { carts, orders, products } from 'db/data_source';
import { AddToCartDto, createCartDto } from '../../dtos/carts.dto';
import { updateCartEntity } from '../../entities/cart.entity';
import Cart from 'entities/cart.entity';
import CartDetail from 'entities/user';
import Order from 'entities/order.entity';

@Injectable()
export class CartsService {
  cart = carts;

  addToCart(cartDto: AddToCartDto) {
    // check if cartDto is defined.
    if (!cartDto) {
      throw new HttpException(
        'Invalid Parameter received',
        HttpStatus.BAD_REQUEST,
      );
    }
    // check product reference is valid;
    const referencedProduct = products.find((p) => p.id === cartDto.productId);
    if (!referencedProduct) {
      throw new HttpException(
        'Invalid product reference',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (referencedProduct.quantity < cartDto.quantity) {
      throw new HttpException(
        `Invalid product quantity. Only ${referencedProduct.quantity} left.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    // assuming no cart previously exist
    // let cart: Cart = new Cart();
    let cart: Cart;
    let cartDetail: CartDetail;
    if (cartDto.cartId) {
      cart = carts.find(
        (c) => c.id === cartDto.cartId && c.userId === cartDto.userId,
      );

      if (cart === undefined) {
        throw new HttpException(
          'Invalid cart reference',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      cart = new Cart();
      cart.id = carts.length + 1;
      cart.userId = cartDto.userId;
      cart.totalAmount = 0;
      cart.cartDetails = [];
    }
    cartDetail = cart.cartDetails.find(
      (c) => c.productId === cartDto.productId,
    );
    if (cartDetail) {
      cartDetail.quantity += cartDto.quantity;
      cartDetail.amount = referencedProduct.price * cartDetail.quantity;
      cart.totalAmount = cartDetail.amount;
    } else {
      cartDetail = new CartDetail();
      cartDetail.cartId = cart.id;
      cartDetail.productId = cartDto.productId;
      cartDetail.quantity = cartDto.quantity;
      cartDetail.amount = referencedProduct.price * cartDto.quantity;
      referencedProduct.quantity -= cartDto.quantity;

      cart.totalAmount += cartDetail.amount;
      cart.cartDetails.push(cartDetail);
    }

    // push cart to store if it is a new cart;
    if (!cartDto.cartId) {
      carts.push(cart);
    }

    return cart;
  }

  checkout(cartId: number, userId: number) {
    let referncencedCart = carts.find(
      (c) => c.id === cartId && c.userId === userId,
    );
    if (!referncencedCart) {
      // throw error
      throw new HttpException('Cart does not exist', HttpStatus.BAD_REQUEST);
    }

    const newOrder = new Order();
    newOrder.cartId = referncencedCart.id;
    newOrder.isPaid = true;
    newOrder.isDelivered = false;
    newOrder.cart = referncencedCart;

    orders.push(newOrder);
    return newOrder;
  }

  getOrders(userId: number, cartId: number) {
    let order: Order;
    let userOrders: Order[];
    if (cartId) {
      order = orders.find(
        (o) => o.cartId === cartId && o.cart.userId === userId,
      );
      return order;
    } else {
      userOrders = orders.filter((o) => o.cart.userId === userId);
      return userOrders;
    }
  }

  getAllCarts() {
    return carts;
  }
  getCartById(id: number) {
    return carts.find((e) => e.id === id);
  }

  updateCart(id: number, cart: updateCartEntity) {
    const cartForUpdate = carts.find((e) => e.id === id);
    const updatedCart = { ...cartForUpdate, ...cart };
    this.cart = this.cart.map((u) => (u.id === id ? updatedCart : u));
    return updatedCart;
  }
  deleteCart(id: number) {
    const cartForDelete = this.cart.findIndex((e) => e.id === id);
    if (cartForDelete === -1) {
      return 'Nothing to delete';
    }
    this.cart.splice(0, 1);
    return 'deleted successfully';
  }
}
