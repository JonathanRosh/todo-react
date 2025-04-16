import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import Task from "../../types";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

function TaskList({ tasks, onDelete, onToggleComplete }: TaskListProps) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
