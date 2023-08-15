import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: "Foydalanuchini registratsiyadan o'tkazish" })
  @Post('/registration')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }
  @ApiOperation({ summary: 'Foydalanuchini login qilish' })
  @HttpCode(200)
  @Post('/login')
  login(@Body() LoginDto: LoginUserDto) {
    return this.authService.login(LoginDto);
  }
}
