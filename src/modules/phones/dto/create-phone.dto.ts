import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDto {
  @ApiProperty({ example: "iPhone 15", description: "Telefon nomi" })
  phone_name: string;

  @ApiProperty({ example: 1200, description: "Telefon narxi" })
  phone_price: number;

  @ApiProperty({ example: 1, description: "Category ID" })
  category_id: number;
}