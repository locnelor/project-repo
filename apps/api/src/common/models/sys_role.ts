import { sys_role } from "@repo/database";
import { ApiField } from "../../../libs/api-kit/src/decorators/api-field.decorator";

export class SysRoleModel implements sys_role {
    @ApiField({ description: '主键ID' })
    id: string;

    @ApiField({ description: '创建时间' })
    create_time: Date;

    @ApiField({ description: '更新时间' })
    update_time: Date;

    @ApiField({ description: '创建人' })
    create_by: string;

    @ApiField({ description: '更新人' })
    update_by: string;

    @ApiField({ description: '是否已删除' })
    deleted: boolean;

    @ApiField({ description: '角色名称' })
    name: string;

    @ApiField({ description: '角色描述' })
    description: string;
}
