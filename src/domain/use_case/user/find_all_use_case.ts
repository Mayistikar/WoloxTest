import { UserGateway } from '../../model/gateways/user_gateway'

class FindAllUseCase {
  UserGateway: UserGateway;
  
  constructor(userGateway: UserGateway) {
    this.UserGateway = userGateway
  }

  FindAll() {
    return this.UserGateway.FindAll();
  }

}

export { FindAllUseCase }