import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module'; // Adjust path as needed
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

/**
 * Auth module that sets up JWT authentication.
 */
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: '1234', // Replace with your secret key
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
