import styles from "./TaskForm.module.css";
import { useState } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTaskContent = inputValue.trim();
    if (newTaskContent) {
      onAddTask(newTaskContent);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className={styles.button} type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
