import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Post("create")
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  @Get("all")
  findAll() {
    return this.phonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phonesService.update(+id, updatePhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesService.remove(+id);
  }
}
