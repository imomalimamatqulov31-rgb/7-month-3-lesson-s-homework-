import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, loginUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService
  ){}
async resgister(newUser: CreateUserDto){
  const findaUser = await this.userService.findUserByEmail(newUser.email);
  if(findaUser) throw new BadRequestException("User already exists");
 newUser.password = await bcrypt.hash(newUser.password, 10);
 let insertUser =  await this.userService.create(newUser);
 const accessToken = await this.jwtService.signAsync({ user_id: insertUser.id }, { secret: process.env.JWT_SECRET});
 return {message: "User successfully created", status:201, accessToken};


};
async login(loginUser: loginUserDto){

 const findaUser = await this.userService.findUserByEmail(loginUser.email);
  if(!findaUser) throw new NotFoundException("User not found");
  const checkPassword = await bcrypt.compare(loginUser.password, findaUser.password);
  if(!checkPassword) throw new NotFoundException("User not found");
  const accessToken = await this.jwtService.signAsync({ user_id: findaUser.id }, { secret: process.env.JWT_SECRET});
  return {message: "User successfully logged in", status:200, accessToken};
}
}
