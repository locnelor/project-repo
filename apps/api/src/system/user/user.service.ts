import { Injectable } from '@nestjs/common';
import { BaseCurd } from '@app/api-kit';
import { prisma } from '@repo/database';

@Injectable()
export class UserService extends BaseCurd(prisma.sys_user) {
  constructor() {
    super();
  }
}
