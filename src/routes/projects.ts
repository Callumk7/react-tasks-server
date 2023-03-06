import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const projectsRouter = express.Router();

projectsRouter.get('/', async (req, res) => {
	const allProjects = await prisma.project.findMany();
	res.json(allProjects);
	console.log(allProjects);
});
