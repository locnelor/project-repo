import type { NestMiddleware } from '@nestjs/common'
import type { NextFunction, Request, Response } from 'express'
import { Inject, Injectable } from '@nestjs/common'
import { HashService } from '@app/hash'
import { WebsiteService } from '@app/website'

@Injectable()
export class DecryptMiddleware implements NestMiddleware {
  constructor(@Inject(HashService) private readonly hashService: HashService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const contentType = req.headers['content-type'];
    (req as any).startTime = Date.now()

    // 只处理需要解密且Content-Type为application/json的请求
    if (WebsiteService.getConfig().crypto && contentType?.includes('application/json')) {
      let body = ''

      // 暂存原始的data和end事件监听器
      // const originalListeners = {
      //   data: req.listeners('data'),
      //   end: req.listeners('end')
      // };

      // 移除现有的监听器
      req.removeAllListeners('data')
      req.removeAllListeners('end')

      // 收集原始请求体数据
      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', () => {
        try {
          if (body) {
            // 解密数据
            const decryptedData = this.hashService.sm2Decrypt(body)
            const parsedData = JSON.parse(decryptedData)
            // 重新设置请求体
            req.body = parsedData
          }
        } catch (error) {
          // 如果解密失败，尝试直接解析
          try {
            req.body = JSON.parse(body)
          } catch {
            req.body = body
          }
        }
        next()
      })
    } else {
      // 不需要解密的请求直接通过
      next()
    }
  }
}
