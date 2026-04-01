import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/User.model';
import { Category } from '../category/models/category.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User)private readonly userModel: typeof User){}

 async create(createUserDto: CreateUserDto) {
  const insertUser = await this.userModel.create(createUserDto)
  return {message: "User successfully created!", status:201}
    
  }

 async findAll() {
   const users = await this.userModel.findAll({
     attributes: {
         exclude: ["createdAt", "updatedAt"]
       },
       include: [
         {
           model: Category,
            attributes: ["id", "category_name"],
         }
       ]
   })
   return users
  }

  async findOne(id: number) {
  const findUser = await this.userModel.findByPk(id, { 
     attributes: {
         exclude: ["createdAt", "updatedAt"]
       },
       include: [
         {
           model: Category,
            attributes: ["id", "category_name"],
         }
       ]

  })
  if(!findUser) throw new NotFoundException("User not found")
    return findUser
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
   const findUser = await this.userModel.findByPk(id)
  if(!findUser) throw new NotFoundException("User not found")
    await findUser.update(updateUserDto)
  return {message: "User successfully created", status:200}
  }

  async remove(id: number) {
     const findUser = await this.userModel.findByPk(id)
  if(!findUser) throw new NotFoundException("User not found")
    await findUser.destroy();
  return {message: "User successfully deleted", status: 200}
  }
}
