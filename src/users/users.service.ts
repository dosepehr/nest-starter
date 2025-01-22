import { Injectable } from '@nestjs/common';
import { User } from 'src/app.service';

@Injectable()
export class UsersService {
  getUsers(): User[] {
    return [
      {
        name: 'sepehr',
      },
    ];
  }
}
