import { IsNumber, IsString } from "class-validator";

export class User{

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  age: number;

  @IsString()
  role: string
}