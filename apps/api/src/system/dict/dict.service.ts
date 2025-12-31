import { BaseCrud } from '@app/api-kit';
import { Injectable } from '@nestjs/common';
import { prisma } from '@repo/database';

@Injectable()
export class DictService extends BaseCrud(prisma.sysDict) { }
