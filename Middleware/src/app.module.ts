import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('App Module ')
  }
}
