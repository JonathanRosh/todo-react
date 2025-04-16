import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import Task from "../../types";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
}

function TaskList({ tasks, onToggleComplete }: TaskListProps) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompleted={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
