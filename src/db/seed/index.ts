import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { AppUser } from "../../entity";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const users = await factory(AppUser)().createMany(5);
  }
}