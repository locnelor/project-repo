import type { AuthPowerService } from '@app/auth-power'
import type { LoginDto } from './dto/LoginDto'
import type { RegisterDto } from './dto/RegisterDto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  constructor(
    private readonly authPowerService: AuthPowerService,
  ) { }

  async register({ username, password }: RegisterDto) {
    // const find = await prisma.sysUser.findUnique({
    //   where: {
    //     username
    //   }
    // });
    // if (!!find) throw new ForbiddenException('账号已存在')
    // const user = await prisma.sysUser.create({
    //   data: {
    //     username,
    //     password: this.authPowerService.hashPassword(password),
    //   }
    // })
    // const token = this.authPowerService.generateToken(user)
    // return {
    //   ...user,
    //   token
    // }
  }

  verifyCode() {
    throw new Error('Method not implemented.')
  }

  async login({ username, password }: LoginDto) {
    // const user = await prisma.sys_user.findUnique({
    //   where: { username },
    // });
    // if (!user) {
    //   throw new UnauthorizedException('账号不存在');
    // }

    // // 验证密码
    // if (!this.authPowerService.comparePassword(password, user.password!)) {
    //   throw AccountOrPasswordError;
    // }

    // // 生成令牌
    // const token = this.authPowerService.generateToken(user);

    // return {
    //   ...user,
    //   token,
    // };
  }
}
