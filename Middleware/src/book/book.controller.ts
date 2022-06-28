import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";


@Controller('book')
export class BookController {

  constructor(private bookService : BookService){}

  @Post('/add')
  addBook():string{
    return this.bookService.addBook();
  }

  @Get()
  findAllBook():string{
    return this.bookService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number):string{
    return this.bookService.findById(Number(id));
  }


}