import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CurrentUser, JwtAuthGuard } from '@app/auth-power';
import { CreateMenuDto } from './dto';
import { ListMenuQuery } from './dto/list-menu.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PreAuthorize } from '@app/auth-power/guards/pre-authorize.guard';
import { PermissionAction, PERMISSIONS } from '../../../libs/auth-power/src/constants';

@Controller('api/sys/menu')
@ApiTags('系统菜单')
@UseGuards(JwtAuthGuard)

export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Post()
  @PreAuthorize(PERMISSIONS.SYSTEM.MENU, [PermissionAction.ADD])
  @ApiOperation({ summary: '创建菜单' })
  create(@Body() body: CreateMenuDto, @CurrentUser() user) {
    return this.menuService.create(body, user);
  }

  @Put(':id')
  @PreAuthorize(PERMISSIONS.SYSTEM.MENU, [PermissionAction.UPDATE])
  @ApiOperation({ summary: '更新菜单' })
  update(
    @Param('id') id: string,
    @Body() body: CreateMenuDto,
    @CurrentUser() user,
  ) {
    return this.menuService.update(id, body, user);
  }

  @Delete(':id')
  @PreAuthorize(PERMISSIONS.SYSTEM.MENU, [PermissionAction.DELETE])
  @ApiOperation({ summary: '删除菜单' })
  @ApiParam({ name: 'id', description: '菜单ID' })
  delete(@Param('id') id: string, @CurrentUser() user) {
    return this.menuService.delete(id, user);
  }

  @Get()
  @PreAuthorize(PERMISSIONS.SYSTEM.MENU, [PermissionAction.QUERY])
  @ApiOperation({ summary: '查询菜单列表' })
  list(@Query() query: ListMenuQuery, @CurrentUser() user) {
    return this.menuService.list(query, user);
  }
}
