// components/ItemCard.tsx
import React from "react";
import { Task } from "../App";

interface ItemCardProps {
  task: Task;
  onRemove: (id: number) => void;
  onToggleCompleted: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ task, onRemove, onToggleCompleted }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: task.completed ? "#d4f7d4" : "#f7d4d4", // Change color based on completed
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onToggleCompleted(task.id)}>
        {task.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={() => onRemove(task.id)} style={{ marginLeft: "10px" }}>
        Remove
      </button>
    </div>
  );
};

export default ItemCard;
