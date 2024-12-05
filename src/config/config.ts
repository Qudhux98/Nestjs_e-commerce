// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
// import { configDotenv } from "dotenv";

import {config} from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm';
import Cart from 'entities/cart.entity';
import Order from 'entities/order.entity';
import Product from 'entities/product.entity';
import User from 'entities/user.entity';
import CartDetail from 'entities/cart_detail.entity';

config()
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username:process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  entities: [User, Cart, CartDetail, Product],
  migrations:[],
  // migrations:[__dirname + '/../migrations/*.{ts, js}'],
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;

// export default class TypeOrmConfig{
//     static getOrmConfig(configservice:ConfigService): TypeOrmModuleOptions{
//         return{
//             type: "postgres",
//             host: "localhost",
//             username: 'postgres',
//             password: 'root',
//             entities: [Cart, Product, User, Order],
//             database: "e-commerce",
//             port:5432,
//             synchronize: false,
//             logging: false
//         }
//     }
// }

// export const EcommerceOrm: TypeOrmModuleAsyncOptions = {
//     useFactory: async(configservice:ConfigService): Promise<TypeOrmModuleOptions> =>
//         TypeOrmConfig.getOrmConfig(configservice),
//     imports: [ConfigModule],
//     inject: [ConfigService]
// }
