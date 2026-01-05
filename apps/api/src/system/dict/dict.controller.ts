import type { DictService } from './dict.service'
import { Controller } from '@nestjs/common'

@Controller('dict')
export class DictController {
  constructor(private readonly dictService: DictService) {}
}
