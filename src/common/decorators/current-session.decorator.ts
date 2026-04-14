import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentSession = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-session-id'];
  },
);