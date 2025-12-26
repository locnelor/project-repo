import { Injectable } from '@nestjs/common';
import { prisma, sys_menu, sys_user } from '@repo/database';
import { ListMenuQuery } from './dto/list-menu.dto';
import { BaseCurd } from '@app/api-kit';

@Injectable()
export class MenuService extends BaseCurd(prisma.sys_menu) {

  
  // list({ name, ...rest }: ListMenuQuery, user: any) {
  //   return prisma.sys_menu.page(
  //     {
  //       ...rest,
  //       where: {
  //         name: {
  //           contains: name,
  //         },
  //         deleted: false,
  //       },
  //     }
  //   );
  // }
  // delete(id: string, user: any) {
  //   return prisma.sys_menu.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       deleted: true,
  //       update_by: user?.id,
  //     },
  //   });
  // }
  // async update(id: string, body, user: any) {
  //   const data = {
  //     ...body,
  //   };
  //   if (!!user) {
  //     data.update_by = user.id;
  //   }
  //   return await prisma.sys_menu.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       deleted: true,
  //       update_by: user?.id,
  //       ...body,
  //     },
  //   });
  // }
  // async create(body, user?: sys_user) {
  //   const data = {
  //     ...body,
  //   };
  //   if (!!user) {
  //     data.create_by = user.id;
  //     data.update_by = user.id;
  //   }
  //   return await prisma.sys_menu.create({
  //     data,
  //   });
  // }
}
