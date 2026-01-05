import type { CallHandler, ExecutionContext, NestInterceptor, Type } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { map } from 'rxjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  constructor(private readonly dto: Type<any>) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data == null) return data

        // 处理数组或单个对象
        if (Array.isArray(data)) {
          return plainToInstance(this.dto, data, {
            excludeExtraneousValues: true,
          })
        }

        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        })
      }),
    )
  }
}
