import type { AuthPowerService } from '@app/auth-power'
import { BaseCrudService } from '@app/api-kit'
import { Injectable } from '@nestjs/common'
import { prisma } from '@repo/database'
/**
 * TDelegate：prisma.xxx（如 prisma.sysUser）
 */

@Injectable()
export class TestService extends BaseCrudService<typeof prisma.sysUser> {
  constructor(
    private readonly authPowerService: AuthPowerService,
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
