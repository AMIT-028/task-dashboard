import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSearch } from "../Features/tasks/taskSlice";

const FILTERS = ["all", "completed", "pending"];

export default function Filters() {
  const dispatch = useDispatch();
  const { filter, search } = useSelector((state) => state.tasks);

  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex gap-2">
        {FILTERS.map((type) => {
          const isActive = filter === type;

          return (
            <button
              key={type}
              onClick={() => dispatch(setFilter(type))}
              className={`cursor-pointer px-4 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700"
                }
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </div>

      <div className="relative flex-1 sm:max-w-xs sm:ml-auto">
        <input
          value={search}
          placeholder="Search tasks..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full px-4 py-2 rounded-lg border outline-none transition-all
            bg-white text-slate-900 border-slate-200 placeholder-slate-400
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:placeholder-slate-500"
        />
      </div>
    </div>
  );
}
