import { Injectable } from '@nestjs/common';

export type User = {
  name: string;
  id: number;
};
export type Message = {
  message: string;
};
@Injectable()
export class AppService {
  getWelcome(): Message {
    return {
      message: 'welcome home:)',
    };
  }
}
