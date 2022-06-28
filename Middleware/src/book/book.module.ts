import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookMiddleware, BookMiddlewareTwo } from "./book.middleware";
import { BookService } from "./book.service";


@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware,BookMiddlewareTwo).forRoutes('book');

    // consumer.apply(BookMiddlewareTwo).forRoutes('book/add');

    // one more way
    // consumer.apply(BookMiddlewareTwo).forRoutes({ path: 'book/add', method: RequestMethod.POST });

    // we can also exclude some routes
  //  consumer.apply(BookMiddleware)
  // .exclude(
  //   { path: 'book', method: RequestMethod.GET },
  //   { path: 'book/add', method: RequestMethod.POST },
  //   'cats/(.*)',
  // )
  // .forRoutes(BookController);
  }
}