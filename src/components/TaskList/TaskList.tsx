import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import Task from "../../types";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
