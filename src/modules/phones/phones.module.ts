import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Phone } from './models/phone.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Phone])
  ],
  controllers: [PhonesController],
  providers: [PhonesService],
})
export class PhonesModule {}
