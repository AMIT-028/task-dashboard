import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTaskAsync, deleteTaskAsync } from "../Features/tasks/taskSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveEdit = () => {
    if (!title.trim()) return;

    dispatch(updateTaskAsync({ ...task, title }));
    setIsEditing(false);
  };

  const toggleStatus = () => {
    dispatch(
      updateTaskAsync({
        ...task,
        status: task.status === "pending" ? "completed" : "pending",
      })
    );
  };

  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-4
        sm:flex-row sm:items-center sm:justify-between
        bg-white dark:bg-slate-800
        border border-slate-300 dark:border-slate-700
        shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex-1">
        {isEditing ? (
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={saveEdit}
            className="w-full px-3 py-1.5 rounded-md
              border-2 border-blue-500
              bg-white dark:bg-slate-900
              text-slate-900 dark:text-white
              outline-none"
          />
        ) : (
          <p
            className={`text-lg font-semibold transition-all
              ${
                task.status === "completed"
                  ? "line-through text-slate-400 opacity-60"
                  : "text-slate-800 dark:text-slate-100"
              }
            `}
          >
            {task.title}
          </p>
        )}

        <div className="flex items-center gap-2 mt-1">
          <span
            className={`w-2.5 h-2.5 rounded-full
              ${
                task.status === "completed"
                  ? "bg-green-500"
                  : "bg-amber-500"
              }
            `}
          />
          <span
            className={`text-xs font-bold uppercase tracking-wider
              ${
                task.status === "completed"
                  ? "text-green-600 dark:text-green-400"
                  : "text-amber-600 dark:text-amber-400"
              }
            `}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="cursor-pointer px-3 py-2 text-sm font-medium rounded-lg border
            border-slate-300 dark:border-slate-600
            text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        >
          Edit
        </button>

        <button
          onClick={toggleStatus}
          className="cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg border
            border-slate-400 dark:border-slate-600
            text-slate-700 dark:text-slate-200
            hover:bg-slate-50 dark:hover:bg-slate-700 transition"
        >
          {task.status === "completed" ? "Undone" : "Done"}
        </button>

        <button
          onClick={() => dispatch(deleteTaskAsync(task.id))}
          className="cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg
            bg-red-100 dark:bg-red-900/30
            text-red-700 dark:text-red-400
            hover:bg-red-600 hover:text-white transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
