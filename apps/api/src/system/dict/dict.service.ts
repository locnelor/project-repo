import { BaseCrudService, BaseCurd } from '@app/api-kit';
import { Injectable } from '@nestjs/common';
import { prisma } from '@repo/database';

@Injectable()
export class DictService extends BaseCurd(prisma.sys_dept) { }
