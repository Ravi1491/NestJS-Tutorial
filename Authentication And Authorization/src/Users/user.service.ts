import { Injectable } from "@nestjs/common";
import { CONSTANTS } from "./constant";
import { User } from "./user.entity";

@Injectable()
export class UserService{
  public users : User[] = [
    {
      username: 'User1',
      email: 'user1@gmail.com',
      password: 'admin',
      age: 23,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER
    },
    {
      username: 'User2',
      email: 'user2@gmail.com',
      password: 'admin',
      age: 33,
      role: CONSTANTS.ROLES.WEB_DEVELOPER
    },
    {
      username: 'User3',
      email: 'user3@gmail.com',
      password: 'admin',
      age: 28,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER
    },
    {
      username: 'User4',
      email: 'user4@gmail.com',
      password: 'admin',
      age: 28,
      role: CONSTANTS.ROLES.WEB_DEVELOPER
    },
  ]
  
  getUserByName(userName : string) : User {
    return this.users.find((user:User) => user.username ===userName)
  }

}