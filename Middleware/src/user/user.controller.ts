import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {

  constructor(private userService : UserService){}

  @Post('/add')
  addBook():string{
    return this.userService.addBook();
  }

  @Get()
  findAllBook():string{
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number):string{
    return this.userService.findById(Number(id));
  }


}