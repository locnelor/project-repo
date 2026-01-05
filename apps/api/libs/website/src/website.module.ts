import { Module } from '@nestjs/common'
import { WebsiteService } from './website.service'

@Module({
  providers: [WebsiteService],
  exports: [WebsiteService],
})
export class WebsiteModule {}
