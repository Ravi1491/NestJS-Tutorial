import { Controller, Get, Header, HttpCode, Param, Post, Redirect } from "@nestjs/common";


@Controller('book')
export class BookController{

  // @Header('Cache-Control','none')
  // @HttpCode(200)
  @Post('/add')
  addBook(): string {
    return "This will add Book";
  } 

  @Get()  
  @Redirect('https://nestjs.com',301)
  findAllBook(): string {
    return "This will find all Book"
  }

  @Get(':id')
  fndOne(@Param('id') id: number):string{
    return "This will return book by id"
  }
}