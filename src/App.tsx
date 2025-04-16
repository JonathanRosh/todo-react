import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Task from "./types";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    const newTaskContent = task.trim();
    if (newTaskContent) {
      const newTask: Task = {
        id: Date.now(),
        text: newTaskContent,
        completed: false,
      };
      setTasksList([...tasksList, newTask]);
    }
  }

  return (
    <div className={styles.container}>
      <Header title="Task List" />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasksList} />
    </div>
  );
}

export default App;
