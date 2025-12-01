import { sys_user } from "@repo/database";
import { ApiField } from "../decorators/api-field.decorator";


export class SysUserModel implements sys_user {
    @ApiField({ description: '主键ID' })
    id: string;

    @ApiField({ description: '创建时间' })
    create_time: Date;

    @ApiField({ description: '更新时间' })
    update_time: Date;

    @ApiField({ description: '创建人', })
    create_by: string;

    @ApiField({ description: '更新人' })
    update_by: string;

    @ApiField({ description: '是否已删除' })
    deleted: boolean;

    @ApiField({ description: '用户名' })
    username: string;

    @ApiField({ description: '密码' })
    password: string;

    @ApiField({ description: '昵称' })
    nickname: string;

    @ApiField({ description: '真实姓名' })
    real_name: string;

    @ApiField({ description: '邮箱' })
    email: string;

    @ApiField({ description: '手机号' })
    phone: string;

    @ApiField({ description: '工号' })
    job_no: string;

    @ApiField({ description: '部门ID' })
    dept_id: string;
}
