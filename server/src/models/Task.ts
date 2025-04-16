import mongoose, { Document } from "mongoose";
import ITask from "../types/task";

export interface ITaskDocument extends ITask, Document {}

const taskSchema = new mongoose.Schema<ITaskDocument>({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ITaskDocument>("Task", taskSchema);
