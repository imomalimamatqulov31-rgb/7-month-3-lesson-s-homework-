import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/models/User.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category)private readonly categoryModel: typeof Category){}

  async create(createCategoryDto: CreateCategoryDto) {
   const insertCategory = await this.categoryModel.create(createCategoryDto)
  return {message: "Category successfully created!", status:201}
    
  }

  async findAll() {
    const categroies = await this.categoryModel.findAll({
   attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: [
      {
        model: User,
         attributes: ["id", "firstname"],
      }
    ]
   })
   return categroies
  }

  async findOne(id: number) {
const findCategory = await this.categoryModel.findByPk(id, { attributes: {
      exclude: ["createdAt", "updatedAt"]
    }

  })
  if(!findCategory) throw new NotFoundException("Catefgory not found")
    return findCategory
  }

async update(id: number, updateCategoryDto: UpdateCategoryDto) {
  const findCategory = await this.categoryModel.findByPk(id);

  if (!findCategory) {
    throw new NotFoundException("Category not found");
  }

  await findCategory.update( updateCategoryDto);

  return {
    message: "Category successfully updated",
    status: 200,
  };
}

 async  remove(id: number) {
 const findCategory = await this.categoryModel.findByPk(id)
  if(!findCategory) throw new NotFoundException("Category not found")
    await findCategory.destroy();
  return {message: "User successfully deleted", status: 200}
  }
  }

