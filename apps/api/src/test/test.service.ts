import { AuthPowerService } from '@app/auth-power';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    constructor(
        private readonly authPowerService: AuthPowerService
    ) { }
    getToken() {
        return this.authPowerService.generateToken({
            id: "test",
            password: "123456"
        });
    }
}
