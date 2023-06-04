import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags("Login")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post("")
    @UseGuards(LocalAuthGuard)
    async login(@Body() data: LoginDto) {
      return this.authService.login(data.email)
    }
}
