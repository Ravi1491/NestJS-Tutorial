import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from "./auth/auth.service";
import { CONSTANTS } from "./Users/constant";
import { RoleGuard } from "./Users/role.guard";

@Controller('app')
export class AppController{
  
  constructor(private readonly authService: AuthService){}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string{
    
    return `
      ${req.user.username } successfully login
      Jwt token - ${this.authService.generateToken(req.user)}
    `
  }

  @Get('web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloper(): string{
    return 'This is web private data'
  }

  @Get('android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloper(): string{
    return 'This is android private data'
  }

}