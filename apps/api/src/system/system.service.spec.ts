import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { SystemService } from './system.service'

describe('systemService', () => {
  let service: SystemService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemService],
    }).compile()

    service = module.get<SystemService>(SystemService)
  })
  it('createUser', async () => {
    await service.createUser()
  })
  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
