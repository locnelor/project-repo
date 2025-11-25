import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthPowerGuard } from './power.guard';
import { AuthPowerEnum } from '../enums/auth-power.enum';

export function PreAuthorize(prefix: string, value: AuthPowerEnum[]) {
  return applyDecorators(UseGuards(new AuthPowerGuard(prefix, value)));
}
