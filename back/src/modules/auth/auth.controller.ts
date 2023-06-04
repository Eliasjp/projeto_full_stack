import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';

interface LoginSchema {
  email: string
  password: string
}

@ApiTags("Login")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post("")
    @UseGuards(LocalAuthGuard)
    async login(@Body() data: LoginSchema) {
      return this.authService.login(data.email)
    }
}
