import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
interface ClassType<T> {
    new (): T;
}
export declare class TransformInterceptor<T> implements NestInterceptor<Partial<T>, T> {
    private readonly classType;
    constructor(classType: ClassType<T>);
    intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<T>;
}
export {};
