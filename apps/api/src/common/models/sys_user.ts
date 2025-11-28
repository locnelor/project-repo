import { sys_user } from "@repo/database";
import { ApiField } from "../decorators/api-field.decorator";


export class SysUserModel implements sys_user {
    @ApiField('主键ID')
    id: string;

    @ApiField('创建时间')
    create_time: Date;

    @ApiField('更新时间')
    update_time: Date;

    @ApiField('创建人', { required: false })
    create_by: string | null;

    @ApiField('更新人', { required: false })
    update_by: string | null;

    @ApiField('是否已删除')
    deleted: boolean;

    @ApiField('用户名')
    username: string;

    @ApiField('密码', { required: false })
    password: string | null;

    @ApiField('昵称', { required: false })
    nickname: string | null;

    @ApiField('真实姓名', { required: false })
    real_name: string | null;

    @ApiField('邮箱', { required: false })
    email: string | null;

    @ApiField('手机号', { required: false })
    phone: string | null;

    @ApiField('工号', { required: false })
    job_no: string | null;

    @ApiField('部门ID', { required: false })
    dept_id: string | null;
}