import { Coin } from './coin'

class User {
  Name: string
  Surname: string
  Username: string
  Password: string
  Currency: string
  Coins: Coin[]
  constructor() {}
}

class UserBuilder {
  private readonly _user: User;

  constructor() {
    this._user = {
      Name: '',
      Surname: '',
      Username: '',
      Password: '',
      Currency: '',
      Coins: []
    }
  }

  Name(name: string): UserBuilder {
    this._user.Name = name;
    return this
  }
  Surname(surname: string): UserBuilder {
    this._user.Surname = surname;
    return this
  }
  Username(username: string): UserBuilder {
    this._user.Username = username;
    return this
  }
  Password(password: string): UserBuilder {
    this._user.Password = password;
    return this
  }
  Currency(currency: string): UserBuilder {
    this._user.Currency = currency;
    return this
  }
  Coins(Coins: Coin[]): UserBuilder {
    this._user.Coins = Coins;
    return this
  }

  Build(): User {
    return this._user;
  }

}

export { User, UserBuilder }