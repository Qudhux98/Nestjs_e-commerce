# NESTJS
1. Have you ever heard about Nestjs? While it has almost different sound as Nextjs, they are distinctly different. 
2. Nestjs is a progressive Nodejs framework built to help developers efficient, scalable and maintanable applications.
3. One of the beautiful things of Nestjs is that it supports typescipt.
4. It is also completely compatible with different databases ranging from SQL database such as Postgre to NOSQL databases such as Mongodb
5. In this module, we will building e-commerce app using Nestjs, TypeORM and Postgre
6. So, this is just the beginning. Watch out.




# Migrations

# Compiling to Javascript 
typeorm": "npm run build && npx typeorm -d dist/db/data-source.js

# Without compiling to Javascript
typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli -d src/config/config.ts