import { Router, Request, Response } from "express";
import Task from "../models/Task";
import ITask from "../types/task";

const router = Router();

//Get all tasks
router.get("/", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

//Create a new task
router.post("/", async (req: Request<{}, {}, ITask>, res: Response) => {
  const task = new Task({
    text: req.body.text,
    completed: req.body.completed,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: "Failed to create task" });
  }
});

//Delete a task
router.delete("/:id", async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task" });
  }
});

export default router;
