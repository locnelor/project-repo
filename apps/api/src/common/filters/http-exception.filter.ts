import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

export interface ErrorResponse {
  code: number;
  msg: string;
  error?: string;
  now: number;
  path: string;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let message: string;
    let error: string | undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const responseObj = exceptionResponse as any;
        message = responseObj.message || responseObj.error || exception.message;
        error = responseObj.error;
        
        // 处理验证错误
        if (Array.isArray(responseObj.message)) {
          message = responseObj.message.join(', ');
        }
      } else {
        message = exception.message;
      }
    } else if (exception instanceof Error) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = '服务器内部错误';
      error = exception.message;
      
      // 记录未知错误
      this.logger.error(
        `Unexpected error: ${exception.message}`,
        exception.stack,
        `${request.method} ${request.url}`,
      );
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = '未知错误';
      error = String(exception);
      
      this.logger.error(
        `Unknown exception: ${String(exception)}`,
        undefined,
        `${request.method} ${request.url}`,
      );
    }

    const errorResponse: ErrorResponse = {
      code: status,
      msg: message,
      error: process.env.NODE_ENV === 'development' ? error : undefined,
      now: Date.now() / 1000,
      path: request.url,
    };

    // 记录HTTP错误（除了404）
    if (status >= 500) {
      this.logger.error(
        `HTTP ${status} Error: ${message}`,
        error,
        `${request.method} ${request.url}`,
      );
    } else if (status !== HttpStatus.NOT_FOUND) {
      this.logger.warn(
        `HTTP ${status} Warning: ${message}`,
        `${request.method} ${request.url}`,
      );
    }

    response.status(status).json(errorResponse);
  }
}