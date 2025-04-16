import styles from "./TaskItem.module.css";
import Task from "../../types";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
  return (
    <div className={styles.item}>
      <span
        className={styles.text}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={() => task._id && onToggleComplete(task._id)}
      >
        {task.text}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => task._id && onDelete(task._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
