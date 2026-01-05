import { BaseCrudService } from '@app/api-kit'
import { Inject, Injectable } from '@nestjs/common'
import { prisma } from '@repo/database'
import { AuthPowerService } from '@app/auth-power'
/**
 * TDelegate：prisma.xxx（如 prisma.sysUser）
 */

@Injectable()
export class TestService extends BaseCrudService<typeof prisma.sysUser> {
  constructor(
    @Inject(AuthPowerService) private readonly authPowerService: AuthPowerService,
  ) {
    super(prisma.sysUser)
  }

  async test() {
  }

  getToken() {
    return this.authPowerService.generateToken({
      id: 'test',
      password: '123456',
    })
  }
}
