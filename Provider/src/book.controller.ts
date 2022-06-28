import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/create-book-dto";


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

  @Put('/update/:id')
  updateBook(@Param('id') id:number, @Body() BookDto : BookDto):string{
    return this.bookService.updateBookById(Number(id), BookDto)
  }


}