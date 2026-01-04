
import { Controller } from "@nestjs/common";
import { prisma } from "@repo/database";
import { ApiTags } from "@nestjs/swagger";
import { createCrudController, CrudApi } from "./testCrud";
import { CreateUserDto } from "../system/user/dto/create-user.dto";

const Base = createCrudController({
    model: prisma.sysUser,
    apis: [CrudApi.LIST, CrudApi.DETAIL, CrudApi.CREATE, CrudApi.UPDATE, CrudApi.DELETE],
    dtos: {
        create: CreateUserDto,
        
        // Using any for others for now or reuse existing if available
    }  
});

@ApiTags('Test Crud')
@Controller('test-crud')
export class Test1Controller extends Base {
    constructor(){
        super()
    }
    test() {
        // this.crudService.softDelete()
    }
}
