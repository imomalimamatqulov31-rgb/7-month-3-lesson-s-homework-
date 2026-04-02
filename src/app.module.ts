import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/models/User.model';
import { AuthModule } from './models/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    autoLoadModels: true,
    synchronize: true,  
    logging: false,
    models: [User]
  }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' },
  }),
  UserModule,
  AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
