import React, { ChangeEvent, useState } from "react";
import LayoutCard from "./LayoutCard";
import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  AppDispatch,
  addTask,
  toggleTask,
  deleteTask,
} from "../Redux/Store";

const TodoApp: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const [newTask, setNewTask] = useState<string>("");

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    dispatch(addTask(newTask));
    setNewTask("");
  };

  const handleToggle = (index: number) => dispatch(toggleTask(index));
  const handleDelete = (index: number) => dispatch(deleteTask(index));

  return (
    <LayoutCard
      title="TO DO APP"
      subtitle="Stop Procrastinating, Start Organizing"
    >
      {tasks.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <p className="mb-4">No tasks yet! Start by adding your first task.</p>
        </div>
      ) : (
        <ul className="border-t border-gray-700 pt-4 space-y-[25px] font-poppins text-[16px]">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between h-[40px]"
            >
              <div
                onClick={() => handleToggle(index)}
                className={`w-6 h-6 flex items-center justify-center rounded-[8px] border-2 cursor-pointer transition-colors ${
                  task.done
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-400 bg-input-bg"
                }`}
              >
                {task.done && <span className="text-white text-xs">✓</span>}
              </div>
              <span
                className={`flex-1 ml-2 ${
                  task.done
                    ? "line-through text-muted opacity-60"
                    : "text-light"
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleDelete(index)}
                className="transition-colors hover:opacity-70 mr-[40px]"
              >
                <img
                  src="/Vector.png"
                  alt="Delete"
                  className="w-[30px] h-[35px]"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-start gap-4 font-poppins w-full max-w-[1280px]">
        <div className="flex items-center w-full bg-[#23262C] rounded-[10px] px-[30px] py-[16px] h-[80px]">
          <input
            type="text"
            placeholder="New Note"
            value={newTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewTask(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
            }}
            className="flex-1 h-[80px] bg-transparent text-light placeholder-text-muted focus:outline-none text-[16px] opacity-50"
          />
          <button
            onClick={handleAdd}
            className="ml-4 w-[160px] h-[48px] rounded-[9px] bg-[#F4F6FA] text-[#2E3239] flex items-center justify-center text-center hover:bg-gray-200 transition-colors"
          >
            Add New Note
          </button>
        </div>
      </div>
    </LayoutCard>
  );
};

export default TodoApp;
