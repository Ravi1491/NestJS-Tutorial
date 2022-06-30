import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService{
  public users : User[] = [
    {
      username: 'User1',
      email: 'user1@gmail.com',
      password: 'admin'
    },
    {
      username: 'User2',
      email: 'user2@gmail.com',
      password: 'admin'
    },
    {
      username: 'User3',
      email: 'user3@gmail.com',
      password: 'admin'
    },
  ]
  
  getUserByName(userName : string) : User {
    return this.users.find((user:User) => user.username ===userName)
  }

}