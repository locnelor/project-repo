import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { SysRoleModel } from '../../common/models/sys_role';
import { ApiResponseJson } from '../../common/decorators/api-response.decorator';

@Controller('api/sys/role')
@ApiTags('角色管理')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiResponseJson(SysRoleModel, { summary: '创建角色' })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  @ApiResponseJson([SysRoleModel], { summary: '查询所有角色' })
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiResponseJson(SysRoleModel, { summary: '查询角色详情' })
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  @ApiResponseJson(SysRoleModel, { summary: '更新角色' })
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  @ApiResponseJson(SysRoleModel, { summary: '删除角色' })
  remove(@Param('id') id: string) {
    return this.roleService.remove(id);
  }
}
