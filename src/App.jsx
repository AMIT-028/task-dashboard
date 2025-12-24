import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Filters from "./components/Filters";
import ThemeToggle from "./components/ThemeToggle";
import { fetchTasks } from "./Features/tasks/taskSlice";

export default function App() {
  const dispatch = useDispatch();
  const { list, filter, search, status } = useSelector((state) => state.tasks);
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  const filteredTasks = list
    .filter((task) => {
      if (filter === "completed") return task.status === "completed";
      if (filter === "pending") return task.status === "pending";
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans
  ${
    mode === "dark"
      ? "bg-[#0f172a] text-slate-200"
      : "bg-[#f8fafc] text-slate-800"
  }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Task Dashboard
          </h1>
          <ThemeToggle />
        </div>

        <TaskForm />
        <Filters />

        <div className="mt-8 space-y-4">
          {list.length === 0 ? (
            <div
              className="text-center py-16 rounded-xl border
        bg-white text-slate-500
        dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
            >
              <p className="text-lg font-medium">No tasks yet</p>
              <p className="text-sm mt-2">
                Add your first task to get started ..
              </p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div
              className="text-center py-16 rounded-xl border
        bg-white text-slate-500
        dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
            >
              <p className="text-lg font-medium">No tasks found</p>
              <p className="text-sm mt-2">
                Try adjusting the filter or search keyword
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
          )}
        </div>
      </div>
    </div>
  );
}
