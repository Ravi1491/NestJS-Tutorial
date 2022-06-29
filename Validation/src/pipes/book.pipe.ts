import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { BookDto } from "src/dto/create-book-dto";


export class BookPipe implements PipeTransform{
  async transform(value: any, metadata: ArgumentMetadata) {
    // class transformer
    const bookClass = plainToInstance(BookDto, value);
    console.log(typeof(bookClass))
    
    // class validator
    const errors = await validate(bookClass);
    console.log(errors)
    
    if(errors.length > 0) throw new BadRequestException('Validation failed' + JSON.stringify(errors));
    
    return value;
  }
}