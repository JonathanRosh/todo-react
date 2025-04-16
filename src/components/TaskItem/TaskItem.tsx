import styles from "./TaskItem.module.css";
import Task from "../../types";
interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <div id={task.id.toString()} className={styles.item}>
      <span className={styles.text}>{task.text}</span>
    </div>
  );
}

export default TaskItem;
