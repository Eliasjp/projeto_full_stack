import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface LoginSchema {
  email: string
  password: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post("")
    @UseGuards(LocalAuthGuard)
    async login(@Body() data: LoginSchema) {
      return this.authService.login(data.email)
    }
}
