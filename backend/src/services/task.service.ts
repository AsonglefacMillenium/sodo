import Task, { TaskAttributes } from "../models/task.model";

export const createTask = async (
  title: string,
  description?: string
): Promise<TaskAttributes> => {
  const task = await Task.create({ title, description });
  return task.toJSON() as TaskAttributes;
};

export const getTasks = async (status?: string) => {
  const where = status ? { status } : {};
  return Task.findAll({ where });
};

export const getTaskById = (id: string) => Task.findByPk(id);

export const updateTask = async (
  id: string,
  updates: Partial<Pick<TaskAttributes, "title" | "description" | "status">>
) => {
  const task = await Task.findByPk(id);
  if (!task) throw new Error("Task not found");
  await task.update(updates);
  return task;
};

export const deleteTask = async (id: string) => {
  const task = await Task.findByPk(id);
  if (!task) throw new Error("Task not found");
  await task.destroy();
  return { message: "Task deleted" };
};
