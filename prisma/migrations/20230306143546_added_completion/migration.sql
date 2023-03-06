-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "comleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
