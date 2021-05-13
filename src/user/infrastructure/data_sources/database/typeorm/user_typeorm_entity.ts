import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    favoriteCoin: string;
}

export { User as UserTypeorm };