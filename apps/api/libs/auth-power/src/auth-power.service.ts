import type { HashService } from '@app/hash'
import type { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'

export interface JwtPayload {
  sub: string
  crypto: string
}

@Injectable()
export class AuthPowerService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly hashService: HashService,
  ) {}

  async validate({ sub, crypto }: JwtPayload) {
    if (sub === 'test') {
      console.log(this.comparePassword('123456', crypto))
      return this.comparePassword('123456', crypto)
    }
    return {
      id: sub,
      crypto,
    }
    // const user = await prisma.sys_user.findUnique({
    //   where: {
    //     id: sub,
    //   },
    //   include: {
    //     // roles: {
    //     //   include: {
    //     //     role: {
    //     //       include: {
    //     //         menus: {
    //     //           include: {
    //     //             menu: true
    //     //           }
    //     //         }
    //     //       }
    //     //     }
    //     //   }
    //     // },
    //     dept: true,
    //   },
    // });
    // if (!user) return null;
    // if (!this.comparePassword(user.password!, crypto)) return null;
    // return user;
  }

  /**
   * 生成JWT Token
   */
  generateToken(user: any) {
    const payload: JwtPayload = {
      sub: user.id,
      crypto: this.hashPassword(user.password),
    }
    return this.jwtService.sign(payload)
  }

  /**
   * 密码加密
   */
  hashPassword(password: string) {
    const { salt, hash } = this.hashService.cryptoPassword(password)
    return `${salt}:${hash}`
  }

  /**
   * 密码验证
   */
  comparePassword(password: string, hashedPassword: string) {
    const [salt, hash] = hashedPassword.split(':')
    return this.hashService.verifyPassword(password, salt, hash)
  }
}
