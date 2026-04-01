import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/models/User.model';
import { UserController } from './modules/user/user.controller';
import { CategoryModule } from './modules/category/category.module';
import { PhonesModule } from './modules/phones/phones.module';
import { Category } from './modules/category/models/category.model';
import { Phone } from './modules/phones/models/phone.model';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      port: process.env.DB_PORT ? Number
      (process.env.DB_PORT): 5432,
      logging:false,
      autoLoadModels: true,
      synchronize: true,
      models: [User, Category, Phone ], 
     
      
    }),
    UserModule,
    CategoryModule,
    PhonesModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
