import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: "Electronics", description: "Category nomi" })
  category_name: string;

  @ApiProperty({ example: 1, description: "User ID" })
  user_id: number;
}
