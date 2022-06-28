
// Global middleware can be executed by function based not class based

import { NextFunction, Request, Response } from "express";

export function globalMiddlewareOne(req : Request, res : Response, next : NextFunction){
  console.log("Global middleware 1");
  next();
}

export function globalMiddlewareTwo(req : Request, res : Response, next : NextFunction){
  console.log("Global middleware 2");
  next();
}

export function serverMiddleware(req : Request, res : Response, next : NextFunction){
  let protocol = req.protocol;
  let host = req.get('host');
  let url = req.originalUrl;
  let method = req.method;
  let date = new Date().toDateString();
 
  console.log(protocol + "://" + host + url + "  " + method + "  " + date)

  next();
}
