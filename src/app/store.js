import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../Features/tasks/taskSlice"
import themeReducer from "../Features/theme/themeSlice"
import { loadState, saveState } from "../utils/storage"
const preloadedTasks = loadState("tasks")
const preloadedTheme = loadState("theme")
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme:themeReducer
  },
  preloadedState: {
    tasks: preloadedTasks,
    theme: preloadedTheme
  }
})
store.subscribe(() => {
  saveState("tasks",store.getState().tasks)
  saveState("theme",store.getState().theme)
})
