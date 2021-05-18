import { IsString, MinLength, IsNotEmpty } from 'class-validator';

class UserDTO {
  @IsString()
  Name: string

  @IsString()
  Surname: string

  @IsNotEmpty()
  Username: string
  
  @MinLength(8, { message: 'Password is too short' })
  Password: string

  @IsNotEmpty({ message: `Currency can't be empty use 'usd', 'eur', 'ars' `})
  Currency: string

  constructor({ name, surname, username, password, currency }) {
    this.Name = name
    this.Surname = surname
    this.Username = username
    this.Password = password
    this.Currency = currency
  }
}

export { UserDTO }  