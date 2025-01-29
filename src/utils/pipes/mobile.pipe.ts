import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { normalizeMobileNumber } from 'src/utils/funcs/normalizePhoneNumber';

@Injectable()
export class MobilePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const mobile = value.mobile;
    if (mobile) {
      const normalized = normalizeMobileNumber(mobile);
      if (!normalized) {
        throw new BadRequestException('mobile is not in a valid format');
      }
      return { ...value, mobile: normalized };
    } else {
      throw new BadRequestException('mobile must be only numbers');
    }
  }
}
