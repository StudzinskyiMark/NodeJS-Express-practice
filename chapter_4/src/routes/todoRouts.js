import express from 'express';
import prisma from '../prismaClient.js';

const router = express.Router();

//Get all todos
router.get('/', async (req, res) => {
	const getTodos = await prisma.todo.findMany({
		where: {
			userId: req.userId,
		},
	});
	res.json(getTodos);
});

//Create a new todo
router.post('/', async (req, res) => {
	const { task } = req.body;

	const createTodo = await prisma.todo.create({
		data: {
			task: task,
			userId: req.userId,
		},
	});
	res.status(201).json({ id: createTodo.id, task, completed: 0 });
});

//Update a todo
router.put('/:id', async (req, res) => {
	const { completed } = req.body;
	const { id } = req.params;

	const updateTodo = await prisma.todo.update({
		where: {
			id: parseInt(id),
			userId: req.userId,
		},
		data: {
			completed: !!completed,
		},
	});

	res.json(updateTodo);
});

//Delete a todo
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const userId = req.userId;

	const deleteTodo = await prisma.todo.delete({
		where: {
			id: parseInt(id),
			userId: userId,
		},
	});

	res.json(deleteTodo);
});

export default router;
