class UserTypeOrm {

  MockData: any = {
    Name: "Name",
    Surname: "Surname",
    Username: "Username",
    Password: "Password",
    FavoriteCoin: {
      Name: "Name"
    }
  }

  constructor() {}

  FindAll(): any[] {    
    return [ this.MockData ];
  }
}

export { UserTypeOrm }