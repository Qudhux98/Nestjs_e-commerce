import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { carts, orders, products } from 'db/data_source';
import { AddToCartDto, createCartDto } from '../../dtos/carts.dto';
import { updateCartEntity } from '../../entities/cart.entity';
import Cart from 'entities/cart.entity';
import CartDetail from 'entities/cart_detail.entity';
import Order from 'entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import Product from 'entities/product.entity';

@Injectable()
export class CartsService {
  cart = carts;
  private dbManager: EntityManager;
  constructor(private readonly datasource: DataSource) {
    this.dbManager = datasource.manager;
  }

  async addToCart(cartDto: AddToCartDto):Promise<Cart> {
    // check if cartDto is defined.
    if (!cartDto) {
      throw new HttpException(
        'Invalid Parameter received',
        HttpStatus.BAD_REQUEST,
      );
    }
    // check product reference is valid;
    // const referencedProduct = products.find((p) => p.id === cartDto.productId);
    const referencedProduct = await this.dbManager.findOne(Product, {
      where: { id: cartDto.productId },
    });
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
      // cart = carts.find(
      //   (c) => c.id === cartDto.cartId && c.userId === cartDto.userId,
      // );
      cart = await this.dbManager.findOne(Cart, {
        where: { id: cartDto.cartId },
      });

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
    }
    let cartDetails: CartDetail[] = [];
    // cartDetail = cart.cartDetails.find(
    //   (c) => c.productId === cartDto.productId,
    // );
    cartDetail = await this.dbManager.findOne(CartDetail, {
      where: { productId: cartDto.productId },
    });
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

      cartDetails.push(cartDetail);
    }

    // push cart to store if it is a new cart;
    if (!cartDto.cartId) {
      let newCart = this.dbManager.create(Cart, cart);
      await this.dbManager.transaction(async (transactionManager) => {
        newCart = await transactionManager.save(newCart);

        cartDetails = cartDetails.map((cartDetail) => {
          cartDetail.cartId = newCart.id;
          return cartDetail;
        });
        await transactionManager.save(cartDetails);
      });
      return newCart
    }

    // // Create a new instance of Cart
    // let newCart = this.dbManager.create(Cart, {
    //   userId: userData.id,
    //   totalPrice: String(totalPrice),
    //   totalItems: totalItems,
    // });

    // await this.dbManager.transaction(async (transactionManager) => {
    //   newCart = await transactionManager.save(newCart);

    //   cartProductsarray = cartProductsarray.map((cartProduct) => {
    //     cartProduct.cartId = newCart.id;
    //     return cartProduct;
    //   });

    //   await transactionManager.save(cartProductsarray);
    // });
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
