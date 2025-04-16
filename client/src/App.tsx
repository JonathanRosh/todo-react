import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Task from "./types";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();
      setTasksList(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleAddTask = async (task: string) => {
    const newTaskContent = task.trim();
    if (!newTaskContent) return;

    setIsFormLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: newTaskContent,
          completed: false,
        }),
      });
      if (!response.ok) throw new Error("Failed to add task");
      const newTask = await response.json();
      setTasksList((prev) => [...prev, newTask]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoadingTaskId(id);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete task");
      setTasksList((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoadingTaskId(null);
    }
  };

  const handleToggleComplete = async (id: string) => {
    setLoadingTaskId(id);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
      });
      if (!response.ok) throw new Error("Failed to update task");
      const updatedTask = await response.json();
      setTasksList((prev) =>
        prev.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoadingTaskId(null);
    }
  };

  return (
    <div className={styles.container}>
      <Header title="Task List" />
      {error && <div className={styles.error}>{error}</div>}
      <TaskForm onAddTask={handleAddTask} isLoading={isFormLoading} />
      <TaskList
        tasks={tasksList}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
        loadingTaskId={loadingTaskId}
      />
    </div>
  );
}

export default App;
