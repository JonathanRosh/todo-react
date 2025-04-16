import styles from "./TaskItem.module.css";
import Task from "../../types";

interface TaskItemProps {
  task: Task;
  onToggleCompleted: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onToggleCompleted, onDelete }: TaskItemProps) {
  return (
    <div id={task.id.toString()} className={styles.item}>
      <span
        onClick={() => onToggleCompleted(task.id)}
        className={styles.text}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
