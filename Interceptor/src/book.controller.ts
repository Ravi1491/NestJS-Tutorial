import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/create-book-dto";
import { bookGuard } from "./Guard/book.guard";
import { BookPipe } from "./pipes/book.pipe";


@Controller('book')
export class BookController {

  constructor(private bookService : BookService){}

  @Post('/add')
  addBook():string{
    return this.bookService.addBook();
  }

  @Get()
  @UseGuards(new bookGuard())
  findAllBook():string{
    return this.bookService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number):string{
    return this.bookService.findById(id);
  }

  @Put('/update/:id')
  updateBook(@Param('id') id:number, @Body( new BookPipe()) BookDto : BookDto):string{
    return this.bookService.updateBookById(id, BookDto)
  }

}