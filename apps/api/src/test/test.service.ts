import { BaseCrudService } from '@app/api-kit';
import { AuthPowerService } from '@app/auth-power';
import { Injectable } from '@nestjs/common';
import { Prisma, prisma } from '@repo/database';
/**
 * TDelegate：prisma.xxx（如 prisma.sys_user）
 */


@Injectable()
export class TestService extends BaseCrudService<typeof prisma.sys_user> {
    constructor(
        private readonly authPowerService: AuthPowerService
    ) {
        super(prisma.sys_user)
    }
    async test() {
        const users = await prisma.sys_user.findMany();
        prisma.sys_user.page({
            pageNo: 1,
            pageSize: 10

        })
        const user = await this.findOne({ where: { id: "123" } })
        const page = await this.page({
            pageNo: 1,
            pageSize: 10,
            include: {
                logs: true
            }
        })

        const a = await this.findOne({
            where: {
                id: "123"
            },
            include: {
                logs: true
            }
        });
        a?.logs
        const upd = await this.update({
            where: { id: "" },
            include: {
                logs: true
            },
            data: {}
        })
    }
    getToken() {
        return this.authPowerService.generateToken({
            id: "test",
            password: "123456"
        });
    }
}
