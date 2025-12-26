import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from '@app/api-kit';
import { VerifyCodeDto } from './dto/VerifyCodeDto';
import { AuthUserDto } from './dto/AuthUserDto';
import { LoginDto } from './dto/LoginDto';
import { CurrentUser, IgnorePermission } from '@app/auth-power';
import { SysUserModel } from '@app/prisma';
import { RegisterDto } from './dto/RegisterDto';
import { UserInfoDto } from './dto/UserInfoDto';

@Controller('auth')
@ApiTags("认证模块")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }


    @Get("verifyCode")
    @ApiResult(VerifyCodeDto, { summary: "获取验证码" })
    @IgnorePermission()
    verifyCode() {
        return this.authService.verifyCode()
    }

    @Post("login")
    @ApiResult(UserInfoDto, { summary: "账号密码登录" })
    @IgnorePermission()
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @Get("current")
    @ApiResult(SysUserModel, { summary: "获取当前登录用户" })
    current(
        @CurrentUser() user: SysUserModel
    ) {
        return user
    }

    @Post("register")
    @ApiResult(UserInfoDto, { summary: "注册用户" })
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto)
    }
}
