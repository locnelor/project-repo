import { AuthPowerService } from '@app/auth-power';
import { AccountOrPasswordError } from '@app/error/http.error';
import { prisma } from '@app/prisma';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly authPowerService: AuthPowerService) {}
  async login({ username, password }) {
    const user = await prisma.sys_user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException('账号不存在');
    }

    // 验证密码
    if (!this.authPowerService.comparePassword(password, user.password!)) {
      throw AccountOrPasswordError;
    }

    // 生成令牌
    const access_token = this.authPowerService.generateToken(user);

    return {
      ...user,
      password: '',
      access_token,
    };
  }
}
