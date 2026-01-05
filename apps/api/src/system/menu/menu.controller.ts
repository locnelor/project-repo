import type { PaginationDto } from '@app/api-kit'
import type { CreateMenuDto } from './dto'
import type { MenuService } from './menu.service'
import { ApiResult, Pagination } from '@app/api-kit'
import { AuthController, CurrentUser } from '@app/auth-power'
import { SysMenuModel } from '@app/prisma'
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'

@AuthController({
  url: 'sys/menu',
  tag: '系统菜单',
})
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @ApiResult(SysMenuModel, { description: '获取菜单详情' })
  @Get(`:id/detail`)
  findOne(@Param('id') id: number) {
    return this.menuService.findOne({ where: { id } })
  }

  @ApiResult(Pagination(SysMenuModel), { description: '获取菜单列表' })
  @Get('list')
  findList(@Query() query: PaginationDto) {
    return this.menuService.page({
      pageNo: query.pageNo,
      pageSize: query.pageSize,
    })
  }

  @Post()
  @ApiResult(SysMenuModel, { description: '创建菜单' })
  create(
    @Body() { pid, ...data }: CreateMenuDto,
    @CurrentUser() user,
  ) {
  }

  @Put(':id')
  @ApiResult(SysMenuModel, { description: '更新菜单' })
  update(
    @Param('id') id: number,
    @Body() { pid, ...data }: CreateMenuDto,
    @CurrentUser() user,
  ) {
  }

  @Delete(':id')
  @ApiResult(SysMenuModel, { description: '删除菜单' })
  delete(
    @Param('id') id: number,
    @CurrentUser() user,
  ) {
    return this.menuService.softDelete({ where: { id } }, user)
  }
}
