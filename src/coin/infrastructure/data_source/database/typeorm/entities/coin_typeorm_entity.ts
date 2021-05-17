import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { User } from "../../../../../../user/infrastructure/data_sources/database/typeorm/entities/user_typeorm_entity";
import { CoinGateway } from "../../../../../domain/models/gateways/coin_gateway";

@Entity()
class Coin implements CoinGateway {

    @PrimaryColumn()
    UIID: string;

    @Column()
    Symbol: string

    @Column()
    Price: string

    @Column()
    Name: string
    
    @Column()
    Image: string

    @Column()
    UpdatedAt: string

    @ManyToOne(() => User, user => user.Coins)
    User: User;
}

export { Coin };