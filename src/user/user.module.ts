import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import the TypeOrmModule and specify the User entity
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export UserService if it needs to be used in other modules
})
export class UserModule {}
