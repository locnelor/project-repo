import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrgModule } from './org/org.module';
import { DeptModule } from './dept/dept.module';
import { SystemService } from './system.service';
import { MenuModule } from './menu/menu.module';
import { RoleModule } from './role/role.module';
import { DictModule } from './dict/dict.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    OrgModule,
    DeptModule,
    MenuModule,
    DictModule,
  ],
  providers: [SystemService],
})
export class SystemModule {}
