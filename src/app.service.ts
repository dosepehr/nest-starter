import { Injectable } from '@nestjs/common';

export type User = {
  name: string;
};

@Injectable()
export class AppService {
  getHello(): User[] {
    return [
      {
        name: 'sepehr',
      },
      {
        name: 'ali',
      },
    ];
  }
}
