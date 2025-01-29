import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  constructor(private readonly param: number) {
    this.param = param;
  }
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
