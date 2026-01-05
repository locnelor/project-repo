import { Inject, Controller } from '@nestjs/common'
import { DictService } from './dict.service'

@Controller('dict')
export class DictController {
  constructor(@Inject(DictService) private readonly dictService: DictService) {}
}
