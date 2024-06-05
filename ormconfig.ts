import { AppUser } from "./src/entity/AppUser";

export default {
  name: "grazy_test",
  type: "postgres",
  database: "grazy_test",
  entities: [AppUser],
  synchronize: true,
  logging: false,
  seeds: ["src/db/seed/**/*{.ts,.js}"],
  factories: ["src/db/seed/**/*{.ts,.js}"],
};