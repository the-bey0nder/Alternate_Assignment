import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  input1: string;

  @Column()
  input2: string;

  @Column()
  role1: string;

  @Column()
  jobtype1: string;

  @Column()
  input3: string;

  @Column()
  input4: string;

  @Column()
  role2: string;

  @Column()
  jobtype2: string;
}
