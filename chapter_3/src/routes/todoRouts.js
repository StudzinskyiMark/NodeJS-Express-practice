import express from 'express';
import db from '../db.js';
import { get } from 'http';

const router = express.Router();

//Get all todos
router.get('/', async (req, res) => {
	const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?');
	const todos = getTodos.all(req.userId);
	res.json(todos);
});

//Create a new todo
router.post('/', async (req, res) => {
	const { task } = req.body;

	const createTodo = db.prepare(
		'INSERT INTO todos (user_id, task) VALUES (?, ?)',
	);
	const result = createTodo.run(req.userId, task);
	res.status(201).json({ id: result.lastInsertRowid, task, completed: 0 });
});

//Update a todo
router.put('/:id', async (req, res) => {
	const { completed } = req.body;
	const { id } = req.params;
	const { page } = req.query;

	const updateTodo = db.prepare('UPDATE todos SET completed = ? WHERE id = ?');

	updateTodo.run(completed, id);

	res.json({ message: 'Todo updated' });
});

//Delete a todo
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const userId = req.userId;

	const deleteTodo = db.prepare(
		'DELETE FROM todos WHERE id = ? AND user_id = ?',
	);

	deleteTodo.run(id, userId);

	res.json({ message: 'Todo deleted' });
});

export default router;
