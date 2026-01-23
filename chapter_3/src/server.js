import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRouts from './routes/authRouts.js';
import todoRouts from './routes/todoRouts.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();

const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middleware
app.use(express.json());
//Static files
app.use(express.static(path.join(__dirname, '../public')));

//Routes
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/auth', authRouts);
app.use('/todos', authMiddleware, todoRouts);

//Start server
app.listen(PORT, () => {
	console.log(`Server runs on port: ${PORT}`);
});
