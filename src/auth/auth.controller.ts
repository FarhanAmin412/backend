import { Controller, Get, Request as RequestDecorator, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@RequestDecorator() req: Request) { }

    @Get('google-redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@RequestDecorator() req: Request) {
        return this.authService.googleLogin(req);
    }
}
