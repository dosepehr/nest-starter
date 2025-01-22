import { Injectable } from '@nestjs/common';
import { User } from 'src/app.service';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'sepehr',
    },
    {
      id: 2,
      name: 'ali',
    },
    {
      id: 3,
      name: 'mmd',
    },
  ];
  getUsers(): User[] {
    return this.users;
  }
  getUser(id: string) {
    return this.users.find((user) => user.id == +id);
  }
  addUser(user: User) {
    return this.users.push({
      name: user.name,
      id: 5,
    });
  }
}
