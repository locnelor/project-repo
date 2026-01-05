import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { RedisCacheService } from './redis-cache.service'

describe('redisCacheService', () => {
  let service: RedisCacheService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisCacheService],
    }).compile()

    service = module.get<RedisCacheService>(RedisCacheService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
