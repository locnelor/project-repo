import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthPowerGuard } from './power.guard';
import { PermissionAction } from '@app/auth-power/constants';

export function PreAuthorize(prefix: string, value: PermissionAction[]) {
  return applyDecorators(UseGuards(new AuthPowerGuard(prefix, value)));
}
