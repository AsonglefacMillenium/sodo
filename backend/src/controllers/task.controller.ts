import { RequestHandler } from "express";
import * as taskService from "../services/task.service";

export const createTask: RequestHandler = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = await taskService.createTask(title, description);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const { status } = req.query;
    const tasks = await taskService.getTasks(status as string | undefined);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTask: RequestHandler = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id as string);
    if (!task) return res.status(404).json({ message: "Not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask: RequestHandler = async (req, res, next) => {
  try {
    const updated = await taskService.updateTask(req.params.id as string, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(req.params.id as string);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
