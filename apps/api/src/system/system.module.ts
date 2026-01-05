import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { DeptModule } from './dept/dept.module'
import { DictModule } from './dict/dict.module'
import { MenuModule } from './menu/menu.module'
import { OrgModule } from './org/org.module'
import { RoleModule } from './role/role.module'
import { SystemService } from './system.service'
import { UserModule } from './user/user.module'

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
