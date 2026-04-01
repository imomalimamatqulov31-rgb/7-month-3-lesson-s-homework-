import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Phone } from './models/phone.model';
import { Category } from '../category/models/category.model';

@Injectable()
export class PhonesService {
  constructor(@InjectModel(Phone)private readonly phoneModel: typeof Phone){}

  async create(createPhoneDto: CreatePhoneDto) {
    const insertPhone = await this.phoneModel.create(createPhoneDto)
    return {message: "Phone successfully created", status: 201}
  }

  async findAll() {
   const phones = await this.phoneModel.findAll({
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
     return phones;
  }

  async findOne(id: number) {
  const findPhone = await this.phoneModel.findByPk(id, { attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
  
    })
    if(!findPhone) throw new NotFoundException("Phone not found")
      return findPhone
  }

  async update(id: number, updatePhoneDto: UpdatePhoneDto) {
   const findPhone = await this.phoneModel.findByPk(id)

   if(!findPhone){
    throw new NotFoundException("Phone not found")
   }

   await findPhone.update(updatePhoneDto)
   
   return {message: "Phone successfully updated", status:200}
  }

  async remove(id: number) {
   const findPhone = await this.phoneModel.findByPk(id)
   if(!findPhone) throw new NotFoundException("Phone not found")

    await findPhone.destroy();
    return {message: "Phone successfully deleted", status:200}
  }
}
