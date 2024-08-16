import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

/**
 * Root module that imports the User and Auth modules and sets up TypeORM.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'himanshu',
      database: 'DB1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Note: Set to false in production
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
