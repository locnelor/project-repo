import { sys_user } from "@repo/database";
import { ApiField } from "../decorators/api-field.decorator";


export class SysUserModel implements sys_user {
    @ApiField({ description: '主键ID' })
    id: string;

    @ApiField({ description: '创建时间' })
    create_time: Date;

    @ApiField({ description: '更新时间' })
    update_time: Date;

    @ApiField({ description: '创建人', required: false })
    create_by: string | null;

    @ApiField({ description: '更新人', required: false })
    update_by: string | null;

    @ApiField({ description: '是否已删除' })
    deleted: boolean;

    @ApiField({ description: '用户名' })
    username: string;

    @ApiField({ description: '密码', required: false })
    password: string | null;

    @ApiField({ description: '昵称', required: false })
    nickname: string | null;

    @ApiField({ description: '真实姓名', required: false })
    real_name: string | null;

    @ApiField({ description: '邮箱', required: false })
    email: string | null;

    @ApiField({ description: '手机号', required: false })
    phone: string | null;

    @ApiField({ description: '工号', required: false })
    job_no: string | null;

    @ApiField({ description: '部门ID', required: false })
    dept_id: string | null;
}
