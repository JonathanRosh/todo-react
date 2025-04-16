import styles from "./TaskItem.module.css";
import Task from "../../types";

interface TaskItemProps {
  task: Task;
  onToggleCompleted: (id: number) => void;
}

function TaskItem({ task, onToggleCompleted }: TaskItemProps) {
  return (
    <div id={task.id.toString()} className={styles.item}>
      <span
        onClick={() => onToggleCompleted(task.id)}
        className={styles.text}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
    </div>
  );
}

export default TaskItem;
