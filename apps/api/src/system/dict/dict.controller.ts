import { Controller } from '@nestjs/common';
import { DictService } from './dict.service';

@Controller('dict')
export class DictController {
  constructor(private readonly dictService: DictService) {}
}
