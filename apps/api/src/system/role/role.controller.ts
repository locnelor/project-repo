import type { CreateRoleDto } from './dto/create-role.dto'
import type { UpdateRoleDto } from './dto/update-role.dto'
import type { RoleService } from './role.service'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@Controller('api/sys/role')
@ApiTags('角色管理')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto)
  }

  @Get()
  findAll() {
    return this.roleService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(id)
  }
}
