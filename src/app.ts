import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { tasksRouter } from './routes/tasks';
import { projectsRouter } from './routes/projects';

const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.use('/tasks', tasksRouter);
app.use('/projects', projectsRouter);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
