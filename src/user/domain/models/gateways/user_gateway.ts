import { CoinGateway } from "../../../../coin/domain/models/gateways/coin_gateway";

interface UserGateway {
  Name: string
  Surname: string
  Username: string
  Password: string
  Currency: string
  Coins: CoinGateway[]
}

export { UserGateway }