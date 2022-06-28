import { Injectable } from "@nestjs/common";


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

}