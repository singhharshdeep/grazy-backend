import { faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";
import crypto from 'node:crypto';

import { AppUser } from "../../entity/AppUser";

define(AppUser, () => {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const password = 'grazy_password';
  const name = `${faker.person.firstName()} ${faker.person.lastName()}`;
  const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
  const user = new AppUser(name, email, username, passwordHash);

  user.username = username;
  user.email = email;

  return user;
});