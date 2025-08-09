import {
    ForbiddenException,
    Injectable,
} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello() {
        return {
            data: 'hello',
        };
    }
    forbiddenError() {
        throw new ForbiddenException(`you don't have access to this route`);
    }
}
