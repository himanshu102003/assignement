import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * User entity that represents a user in the database.
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
