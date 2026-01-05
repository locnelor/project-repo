import { InjectRedis } from '@nestjs-modules/ioredis'
import { Injectable } from '@nestjs/common'
import { Redis } from 'ioredis'

@Injectable()
export class RedisCacheService extends Redis {
  constructor(@InjectRedis() public readonly redis: Redis) {
    super(redis.options)
  }
}
