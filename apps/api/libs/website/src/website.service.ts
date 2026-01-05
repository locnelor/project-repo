import type { FileService } from '@app/file'
import { Injectable } from '@nestjs/common'
import { defaultWebsiteConfig } from './types'

let config = defaultWebsiteConfig
@Injectable()
export class WebsiteService {
  constructor(private readonly fileService: FileService) {
    this.init()
  }

  private init() {
    config.crypto = process.env.DEFAULT_CRYPTO === 'true'
    const data = this.fileService.website.getFile('website.json')
    if (!data) {
      this.updateConfig(config)
      return
    }
    config = JSON.parse(data.toString())
  }

  updateConfig(body: any) {
    this.fileService.website.writeFile('website.json', body)
    config = body
  }

  getConfig() {
    return config
  }

  static getConfig() {
    return config
  }
}
