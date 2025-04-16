import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";
import Task from "../../types";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
  loadingTaskId: string | null;
}

function TaskList({
  tasks,
  onDelete,
  onToggleComplete,
  loadingTaskId,
}: TaskListProps) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          isLoading={loadingTaskId === task._id}
        />
      ))}
    </div>
  );
}

export default TaskList;
