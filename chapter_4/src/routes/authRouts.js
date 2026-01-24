import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient.js';

const router = express.Router();

// User Registration endpoint (/auth/register)
router.post('/register', async (req, res) => {
	const { username, password } = req.body;

	//encrypt the password
	const hashedPassword = bcrypt.hashSync(password, 8);

	// Store user in the database
	try {
		const user = await prisma.user.create({
			data: {
				username: username,
				password: hashedPassword,
			},
		});

		//Adding user first todo
		const defaultTodo = `Welcome ${username}! This is your first todo.`;
		await prisma.todo.create({
			data: {
				task: defaultTodo,
				userId: user.id,
			},
		});

		createTodo.run(result.lastInsertRowid, defaultTodo);

		//create Token
		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
			expiresIn: 86400, // 24 hours
		});
		res.status(201).json({ token });
	} catch (err) {
		console.log(err.message);
		return res.status(503).send('Server error');
	}

	// console.log(username, password);
	// console.log(hashedPassword);
});

// User Login endpoint (/auth/login)
router.post('/login', async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: {
				username: username,
			},
		});

		if (!user) {
			return res.status(404).send({ message: 'User not found' });
		}

		const passwordIsValid = bcrypt.compareSync(password, user.password);

		if (!passwordIsValid) {
			return res.status(401).send({ message: 'Invalid Password' });
		}
		console.log('User logged in:', user);

		//Successful login, create token
		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
			expiresIn: 86400, // 24 hours
		});

		res.json({ token });
	} catch (err) {
		return res.status(503);
	}
});

export default router;
