import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { AuthController, CurrentUser } from '@app/auth-power';
import { ApiResult, Pagination, PaginationDto } from '@app/api-kit';
import { SysMenuModel } from '@app/prisma';
import { CreateMenuDto } from './dto';

@AuthController({
  url: 'sys/menu',
  tag: '系统菜单'
})
export class MenuController {
  constructor(private readonly menuService: MenuService) { }
  
  @ApiResult(SysMenuModel, { description: "获取菜单详情" })
  @Get(`:id/detail`)
  findOne(@Param('id') id: string) {
    return this.menuService.findOne({ where: { id } });
  }

  @ApiResult(Pagination(SysMenuModel), { description: '获取菜单列表' })
  @Get('list')
  findList(@Query() query: PaginationDto) {
    return this.menuService.page({
      pageNo: query.pageNo,
      pageSize: query.pageSize,
    });
  }

  @Post()
  @ApiResult(SysMenuModel, { description: '创建菜单' })
  create(
    @Body() { pid, ...data }: CreateMenuDto,
    @CurrentUser() user
  ) {
    return this.menuService.create({
      data: {
        ...data,
        parent: !!pid ? { connect: { id: pid } } : undefined
      },
    }, user);
  }

  @Put(':id')
  @ApiResult(SysMenuModel, { description: '更新菜单' })
  update(
    @Param('id') id: string,
    @Body() { pid, ...data }: CreateMenuDto,
    @CurrentUser() user
  ) {
    return this.menuService.update({
      where: { id },
      data: {
        ...data,
        parent: !!pid ? { connect: { id: pid } } : undefined
      },
    }, user);
  }

  @Delete(':id')
  @ApiResult(SysMenuModel, { description: '删除菜单' })
  delete(
    @Param('id') id: string,
    @CurrentUser() user
  ) {
    return this.menuService.softDelete({ where: { id } }, user);
  }
}
