import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

class TypeORM {
  async Connect(): Promise<Connection> {
    return createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "test",
      entities: [],
      synchronize: true,
      logging: false
     });
  }
}

export { TypeORM }