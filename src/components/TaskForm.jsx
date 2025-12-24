import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAsync } from "../Features/tasks/taskSlice";

export default function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTaskAsync(title));
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 rounded-lg border
          bg-white dark:bg-slate-800
          border-slate-200 dark:border-slate-700
          focus:ring-2 focus:ring-blue-500
          outline-none transition-all shadow-sm"
      />

      <button
        type="submit"
        className="cursor-pointer px-6 py-2.5 rounded-lg font-medium
          bg-blue-600 text-white
          hover:bg-blue-700 transition"
      >
        Add Task
      </button>
    </form>
  );
}
