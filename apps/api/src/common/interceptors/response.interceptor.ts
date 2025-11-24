import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: string;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    const response = context.switchToHttp().getResponse<Response>();
    
    return next.handle().pipe(
      map((data) => {
        // 检查是否为文件响应（通过Content-Type判断）
        const contentType = response.getHeader('Content-Type');
        
        // 如果是文件类型，直接返回原始数据
        if (
          contentType &&
          (contentType.toString().includes('application/octet-stream') ||
            contentType.toString().includes('image/') ||
            contentType.toString().includes('video/') ||
            contentType.toString().includes('audio/') ||
            contentType.toString().includes('application/pdf') ||
            contentType.toString().includes('application/zip') ||
            contentType.toString().includes('text/plain') ||
            contentType.toString().includes('application/vnd.') ||
            response.getHeader('Content-Disposition'))
        ) {
          return data;
        }

        // 检查是否已经是标准格式的响应
        if (data && typeof data === 'object' && 'code' in data && 'message' in data) {
          return data;
        }

        // 标准化响应格式
        return {
          code: 200,
          msg: 'success',
          data: data,
          success: true,
          now: Date.now() / 1000,
        };
      }),
    );
  }
}