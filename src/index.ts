import "reflect-metadata"
import express, { Application } from 'express';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import bodyParser from "body-parser";

import AppDataSource from "./db/data-source";
import { getUserByUsername } from "./repository/user.repository";
import AuthRouter from './routers/auth.router';


const app: Application = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
};

passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  const user = await getUserByUsername(jwtPayload.sub) 
  if (user) {
    done(null, { id: user });
  } else {
    done(null, false);
  }
}));

app.get('/', (req, res) => {
  res.json('Hello, TypeScript in Node.js changed!');
});

app.use('/auth', AuthRouter);

app.listen(port, async () => {
  await AppDataSource.initialize();
  console.log('Database instantiated');
  console.log(`Server is running on port ${port}`);
});
