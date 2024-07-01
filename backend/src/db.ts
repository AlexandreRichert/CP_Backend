import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "src/bdd.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
});