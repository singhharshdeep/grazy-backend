import express from "express";
import { loginUser, registerUser } from "../repository/user.repository";

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, username, email, password } = req.body;

    const { status, message } = await registerUser(name, username, email, password);

    res.status(status).json(message);
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const { status, message } = await loginUser(username, password);

    res.status(status).json(message);
});

export default router;