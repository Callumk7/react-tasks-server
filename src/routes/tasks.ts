import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const tasksRouter = express.Router();

tasksRouter.get('/', async (req, res) => {
	const allTasks = await prisma.task.findMany();
	res.json(allTasks);
	console.log(allTasks);
});

tasksRouter.get('/:id', async (req, res) => {
	const task = await prisma.task.findUnique({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(task);
});

tasksRouter.post('/', async (req, res) => {
	console.log(req.body);
	const task = await prisma.task.create({
		data: {
			title: req.body.title,
			body: req.body.body,
			completed: req.body.completed,
		},
	});
	res.json(task);
});

tasksRouter.put('/:id', async (req, res) => {
	const task = await prisma.task.update({
		where: {
			id: Number(req.params.id),
		},
		data: {
			title: req.body.title,
			body: req.body.body,
			completed: req.body.completed,
			archived: req.body.archived,
			deleted: req.body.deleted,
		},
	});
	res.json(task);
});
