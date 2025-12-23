import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthController } from '@app/auth-power';
import { ApiResult, Pagination, PaginationDto } from '@app/api-kit';
import { prisma, SysUserModel } from '@app/prisma';

@AuthController({
  url: "/api/sys/user",
  tag: "用户管理"
})
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiResult(SysUserModel, { summary: "创建用户" })
  create(@Body() data: CreateUserDto) {
    console.log(data,)
    return
    return this.userService.create({
      data
    })
  }

  @Get()
  @ApiResult(Pagination(SysUserModel), { summary: "查询所有用户" })
  async findAll(@Query() { pageNo, pageSize }: PaginationDto) {
    const result = await this.userService.page({
      pageNo,
      pageSize,
    })
    return result
  }

  @Get(':id')
  @ApiResult(SysUserModel, { summary: "查询用户详情" })
  findOne(@Param('id') id: string) {
    return this.userService.findOne({
      where: { id }
    })
  }

  @Patch(':id')
  @ApiResult(SysUserModel, { summary: "更新用户" })
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.update({
      where: { id },
      data
    })
  }

  @Delete(':id')
  @ApiResult(SysUserModel, { summary: "删除用户" })
  remove(@Param('id') id: string) {
    return this.userService.delete({ where: { id } })
  }
}
