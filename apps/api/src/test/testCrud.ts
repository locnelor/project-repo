import type { SysUserModel } from '@app/prisma'
import type { DynamicModule, Type } from '@nestjs/common'
import { BaseCrudService } from '@app/api-kit'
import { CurrentUser } from '@app/auth-power'
import { Body, Controller, Delete, Get, Inject, Injectable, Module, Param, Patch, Post, Query } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiQuery } from '@nestjs/swagger'

export enum CrudApi {
  LIST = 'LIST',
  DETAIL = 'DETAIL',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export interface CrudOptions<TDelegate = any> {
  model: TDelegate
  apis?: CrudApi[]
  dtos?: {
    create?: Type<any>
    update?: Type<any>
    query?: Type<any>
  }
}

export interface BaseDelegate {
  findUnique: any
  page: any
  create: any
  update: any
  delete: any
}

export function createCrudService<TDelegate extends BaseDelegate>(model: TDelegate): Type<BaseCrudService<TDelegate>> {
  @Injectable()
  class CrudService extends BaseCrudService<TDelegate> {
    constructor() {
      super(model)
    }
  }
  return CrudService
}

export function createCrudController<TDelegate extends BaseDelegate>(options: CrudOptions<TDelegate>) {
  const Service = createCrudService<TDelegate>(options.model)
  const apis = options.apis || Object.values(CrudApi)
  const CreateDto = options.dtos?.create || class {}
  const UpdateDto = options.dtos?.update || class {}
  const QueryDto = options.dtos?.query || class {}

  @Controller()
  class BaseController {
    public static Service = Service

    @Inject(Service)
    public readonly crudService!: BaseCrudService<TDelegate>
  }

  const proto = BaseController.prototype

  // LIST
  if (apis.includes(CrudApi.LIST)) {
    const list = async function (this: BaseController, query: any) {
      return this.crudService.page(query)
    }
    Object.defineProperty(proto, 'list', { value: list, writable: true })

    Get()(proto, 'list', Object.getOwnPropertyDescriptor(proto, 'list')!)
    ApiOperation({ summary: '分页列表' })(proto, 'list', Object.getOwnPropertyDescriptor(proto, 'list')!)
    Query()(proto, 'list', 0)
    if (options.dtos?.query) {
      ApiQuery({ type: QueryDto })(proto, 'list', Object.getOwnPropertyDescriptor(proto, 'list')!)
    }
  }

  // DETAIL
  if (apis.includes(CrudApi.DETAIL)) {
    const detail = async function (this: BaseController, id: any) {
      return this.crudService.findOne({ where: { id: Number(id) } } as any)
    }
    Object.defineProperty(proto, 'detail', { value: detail, writable: true })

    Get(':id')(proto, 'detail', Object.getOwnPropertyDescriptor(proto, 'detail')!)
    ApiOperation({ summary: '详情' })(proto, 'detail', Object.getOwnPropertyDescriptor(proto, 'detail')!)
    Param('id')(proto, 'detail', 0)
  }

  // CREATE
  if (apis.includes(CrudApi.CREATE)) {
    const create = async function (this: BaseController, body: any, user: SysUserModel) {
      return this.crudService.create({ data: body } as any, user)
    }
    Object.defineProperty(proto, 'create', { value: create, writable: true })

    Post()(proto, 'create', Object.getOwnPropertyDescriptor(proto, 'create')!)
    ApiOperation({ summary: '新增' })(proto, 'create', Object.getOwnPropertyDescriptor(proto, 'create')!)
    Body()(proto, 'create', 0)
    if (options.dtos?.create) {
      ApiBody({ type: CreateDto })(proto, 'create', Object.getOwnPropertyDescriptor(proto, 'create')!)
    }
    CurrentUser()(proto, 'create', 1)
  }

  // UPDATE
  if (apis.includes(CrudApi.UPDATE)) {
    const update = async function (this: BaseController, id: any, body: any, user: SysUserModel) {
      return this.crudService.update({ where: { id: Number(id) }, data: body } as any, user)
    }
    Object.defineProperty(proto, 'update', { value: update, writable: true })

    Patch(':id')(proto, 'update', Object.getOwnPropertyDescriptor(proto, 'update')!)
    ApiOperation({ summary: '修改' })(proto, 'update', Object.getOwnPropertyDescriptor(proto, 'update')!)
    Param('id')(proto, 'update', 0)
    Body()(proto, 'update', 1)
    if (options.dtos?.update) {
      ApiBody({ type: UpdateDto })(proto, 'update', Object.getOwnPropertyDescriptor(proto, 'update')!)
    }
    CurrentUser()(proto, 'update', 2)
  }

  // DELETE
  if (apis.includes(CrudApi.DELETE)) {
    const remove = async function (this: BaseController, id: any, user: SysUserModel) {
      return this.crudService.softDelete({ where: { id: Number(id) } } as any, user)
    }
    Object.defineProperty(proto, 'remove', { value: remove, writable: true })

    Delete(':id')(proto, 'remove', Object.getOwnPropertyDescriptor(proto, 'remove')!)
    ApiOperation({ summary: '删除' })(proto, 'remove', Object.getOwnPropertyDescriptor(proto, 'remove')!)
    Param('id')(proto, 'remove', 0)
    CurrentUser()(proto, 'remove', 1)
  }

  return BaseController
}

@Module({})
export class CrudModule {
  static register(controllers: Type<any>[]): DynamicModule {
    const providers = controllers.map((c) => (c as any).Service).filter(Boolean)
    return {
      module: CrudModule,
      controllers,
      providers,
      exports: providers,
    }
  }
}
