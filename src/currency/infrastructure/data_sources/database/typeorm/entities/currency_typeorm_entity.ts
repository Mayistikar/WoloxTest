import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Description: string;  
}

export { Currency as CurrencyTypeorm }