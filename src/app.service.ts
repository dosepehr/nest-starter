import { Injectable } from '@nestjs/common';

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
