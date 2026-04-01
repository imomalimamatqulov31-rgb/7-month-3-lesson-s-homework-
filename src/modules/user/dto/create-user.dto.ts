import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: "Ali", description: "Foydalanuvchi ismi" })
  firstname: string;

  @ApiProperty({ example: "Valiyev", description: "Familiya" })
  lastname: string;

  @ApiProperty({ example: 20, description: "Yoshi" })
  age: number;

  @ApiProperty({ example: "ali@gmail.com", description: "Email manzil" })
  email: string;

  @ApiProperty({ example: "male", description: "Jinsi (male/female)" })
  gender: string;
}