import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, loginUserDto } from 'src/modules/user/dto/create-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body()newUser: CreateUserDto){
    return this.authService.resgister(newUser);

  };
  @Post("login")
 async  login(@Body()loginUser: loginUserDto){
    return this.authService.login(loginUser);
 }

}
