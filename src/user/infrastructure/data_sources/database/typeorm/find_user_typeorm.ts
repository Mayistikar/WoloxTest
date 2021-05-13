class FindUserTypeOrm {

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

  GetAll(): any[] {    
    return [ this.MockData ];
  }
}

export { FindUserTypeOrm }