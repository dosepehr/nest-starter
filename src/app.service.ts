import { Injectable } from '@nestjs/common';

export type User = {
  name: string;
};
export type Message = {
  message: string;
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
  getUser(): User {
    return {
      name: 'sepehr',
    };
  }
  addUser(): Message {
    return {
      message: 'user added',
    };
  }
}
