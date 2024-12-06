// components/Sidebar.tsx
import React from "react";
import { Task } from "../App";

interface SidebarProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ tasks, setTasks }) => {
  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1, // Generate a new ID
      title: `New Task ${tasks.length + 1}`,
      description: "New task description",
      completed: false,
    };
    setTasks([...tasks, newTask]); // Update state with a new array
  };

  return (
    <div style={{ width: "30%" }}>
      <h3>Add a Task</h3>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Sidebar;
