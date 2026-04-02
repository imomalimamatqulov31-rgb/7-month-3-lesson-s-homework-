import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({ message: "Firstname must be a string" })
    @IsNotEmpty({ message: "Firstname must not be empty" })
    firstname: string;

    @IsString({ message: "Lastname must be a string" })
    @IsNotEmpty({ message: "Lastname must not be empty" })
    lastname: string;

    @IsString({ message: "Email must be a string" })
    @IsNotEmpty({ message: "Email must not be empty" })
    @IsEmail()
    email: string;

    @IsString({ message: "Password must be a string" })
    @IsNotEmpty({ message: "Password must not be empty" })
    password: string;


 
}
    export class loginUserDto {
         @IsString({ message: "Email must be a string" })
    @IsNotEmpty({ message: "Email must not be empty" })
    @IsEmail()
    email: string;

    @IsString({ message: "Password must be a string" })
    @IsNotEmpty({ message: "Password must not be empty" })
    password: string;
    }