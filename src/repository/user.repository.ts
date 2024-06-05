import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import AppDataSource from "../db/data-source";
import { AppUser } from "../entity";

const saltRounds = 10;
const userRepository = AppDataSource.getRepository(AppUser);

export async function getUserByUsername(username: string): Promise<AppUser> {
    return await userRepository.findOneBy({ username });
}

export async function registerUser(name: string, username: string, email: string, password: string) {
    const user = await userRepository.findOneBy({ email });

    if (user) return { status: 302, message: 'A user with this email already exists' };

    const passwordHash = await bcrypt.hash(password, saltRounds)
    const newUser = new AppUser(name, email, username, passwordHash);
    await userRepository.save(newUser);
    const token = jwt.sign({ sub: newUser }, 'secret'); // TODO: change secret to env
    return { status: 200, message: { token } };
}

export async function loginUser(username: string, password: string) {
    const user = await getUserByUsername(username);

    if (user) {
        const result = await bcrypt.compare(password, user.passwordHash);
        if (result) {
            const token = jwt.sign({ sub: user }, 'secret'); // TODO: change secret to env
            return { status: 200, message: { token } };
        } else {
            return { status: 401, message: 'Invalid credentials' };
        }
    } else {
        return { status: 404, message: 'User does not exist' };
    }
}