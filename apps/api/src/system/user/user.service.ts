import { Injectable } from '@nestjs/common';
import { BaseCrud } from '@app/api-kit';
import { prisma } from '@repo/database';

@Injectable()
export class UserService extends BaseCrud(prisma.sys_user) {
  constructor() {
    super();
  }
}
