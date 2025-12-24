import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/theme/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className=" cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        border transition
        bg-white text-slate-700 hover:bg-slate-100
        dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700"
    >
      {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
