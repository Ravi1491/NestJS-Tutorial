import { Module } from '@nestjs/common';
import { UserModule } from 'src/Users/user.module';
import { PassportLocalStrategy } from './passport.local.staregy';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStrategy],
  exports: [],
})
export class AuthModule {}
