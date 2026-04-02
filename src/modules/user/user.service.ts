import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/User.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User)private readonly userModel: typeof User){}
  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  findUserByEmail(email: string){
    return this.userModel.findOne({where: {email}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, {where: {id}});
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
