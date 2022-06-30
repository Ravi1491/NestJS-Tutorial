import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './Users/user.module';
@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('App Module ')
  }
}
