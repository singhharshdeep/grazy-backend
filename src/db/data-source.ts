import "reflect-metadata";
import { DataSource } from "typeorm";
import { AppUser, Test } from "../entity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "grazy_test",
    password: "grazy",
    database: "grazy_test",
    synchronize: true,
    logging: false,
    entities: [AppUser, Test],
    migrations: [],
    subscribers: [],
});

export default AppDataSource;
