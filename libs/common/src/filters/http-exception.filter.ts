import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = 'Internal server error';
    let errors: any = undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      const er = exceptionResponse as any;
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else {
        message = er?.message ?? er?.error ?? er?.msg ?? message;
        errors = er?.errors ?? errors;
      }
    } else if (exception && typeof exception === 'object' && 'error' in exception) {
      // Handle RpcException from microservices
      const rpcError = exception as any;
      if (rpcError.error) {
        status = rpcError.error.statusCode || rpcError.error.status || status;
        message = rpcError.error.message ?? rpcError.message ?? rpcError.error ?? message;
        errors = rpcError.error.errors ?? errors;
      }
    } else if (exception instanceof Error) {
      message = exception.message || message;
      console.error('Unhandled exception:', exception);
    } else {
      console.error('Unknown exception:', exception);
    }

    const responseBody: any = {
      statusCode: status,
      message: (Array.isArray(message) ? message.join(', ') : (message || 'Internal server error')),
      timestamp: new Date().toISOString(),
    };

    if (errors) {
      responseBody.errors = errors;
    }

    response.status(status).json(responseBody);
  }
}
