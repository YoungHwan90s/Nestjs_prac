import { Body, Controller, Post, Put } from '@nestjs/common';
import { LoginDto } from './dto/logIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() data: LoginDto) {
    return await this.userService.login(
      data.userId,
      data.password,
    );
  }

  @Post('/signup')
  async createUser(@Body() data: SignUpDto) {
    return await this.userService.createUser(
      data.userId,
      data.name,
      data.password,
    );
  }

  @Put('/update')
  updateUser(@Body() data: SignUpDto) {
    this.userService.updateUser(
      data.userId,
      data.name,
      data.password,
    );
  }
}
