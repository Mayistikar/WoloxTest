import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Coin } from "../../../../../../coin/infrastructure/data_source/database/typeorm/entities/coin_typeorm_entity";
import { UserGateway } from "../../../../../domain/models/gateways/user_gateway";

@Entity()
class User implements UserGateway {

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

    @OneToMany(() => Coin, coin => coin.User)
    Coins: Coin[];
}

export { User };