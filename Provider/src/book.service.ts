import { Injectable } from "@nestjs/common";
import { BookDto } from "./dto/create-book-dto";


@Injectable()
export class BookService{
  
  addBook(): string{
    return "This will add book"
  }

  findAll():string{
    return "This will return all book"
  }

  findById(id: number):string{
    return `This will return book by Id - ${id}`
  }

  updateBookById(id: number, BookDto : BookDto):string{
    console.log(BookDto);
    return "This will update BOOk";
  }
}