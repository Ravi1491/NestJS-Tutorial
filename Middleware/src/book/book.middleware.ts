//  Modules middleware should be implemented by using class based

import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Book Middleware 1");
    next();
  }
}

@Injectable()
export class BookMiddlewareTwo implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Book Middleware 2");
    next();
  }
}