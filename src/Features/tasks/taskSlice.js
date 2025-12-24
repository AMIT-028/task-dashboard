import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit"
import {
  fetchTasksApi,
  addTaskApi,
  updateTaskApi,
  deleteTaskApi
} from "../../api/taskApi"
import { delay } from "../../api/delay"
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { getState }) => {
    const { list } = getState().tasks
    if (list.length > 0){
      await delay(1000)
      return list
    }
    return await fetchTasksApi()
  }
)

export const addTaskAsync = createAsyncThunk(
  "tasks/addTask",
  async title => {
    const task = {
      id: nanoid(),
      title,
      status: "pending"
    }
    return await addTaskApi(task)
  }
)

export const updateTaskAsync = createAsyncThunk(
  "tasks/updateTask",
  async task => {
    return await updateTaskApi(task)
  }
)

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTask",
  async id => {
    return await deleteTaskApi(id)
  }
)

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "all",
    search: "",
    status: "idle",
    error: null
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload
        state.status = "success"
      })
      .addCase(fetchTasks.rejected, state => {
        state.status = "error"
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        const index = state.list.findIndex(t => t.id === action.payload.id)
        if (index !== -1) state.list[index] = action.payload
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.list = state.list.filter(t => t.id !== action.payload)
      })
  }
})

export const { setFilter, setSearch } = taskSlice.actions
export default taskSlice.reducer
