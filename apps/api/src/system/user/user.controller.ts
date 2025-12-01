import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { SysUserModel } from 'src/common/models/sys_user';
import { ApiResponseJson } from 'src/common/decorators/api-response.decorator';

@Controller('api/sys/user')
@ApiTags("用户管理")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiResponseJson(SysUserModel, { summary: "创建用户" })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiResponseJson([SysUserModel], { summary: "查询所有用户" })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponseJson(SysUserModel, { summary: "查询用户详情" })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponseJson(SysUserModel, { summary: "更新用户" })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponseJson(SysUserModel, { summary: "删除用户" })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
