import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    Surname: string;

    @Column()
    Username: string;

    @Column()
    Password: string;

    @Column()
    Currency: string;
}

export { User };