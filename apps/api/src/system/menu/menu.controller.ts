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
import { AuthController } from '@app/auth-power';

@AuthController({
  url: 'sys/menu',
  tag: '系统菜单'
})
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

}
