import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/Users/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.startegy';
import { PassportLocalStrategy } from './passport.local.staregy';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: 'key',
      signOptions: {
        expiresIn: '8h'
      }
    })
  ],
  controllers: [],
  providers: [PassportLocalStrategy, JwtStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
