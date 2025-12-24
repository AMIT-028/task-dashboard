import { delay } from "./delay"

export const fetchTasksApi = async () => {
  try {
    await delay(1000)
    return [
      { id: "1", title: "Learn React", status: "pending" },
      { id: "2", title: "Learn Redux", status: "completed" }
    ]
  } catch {
    throw new Error("Failed to fetch tasks")
  }
}

export const addTaskApi = async task => {
  try {
    await delay(500)
    return task
  } catch {
    throw new Error("Failed to add task")
  }
}

export const updateTaskApi = async task => {
  try {
    await delay(400)
    return task
  } catch {
    throw new Error("Failed to update task")
  }
}

export const deleteTaskApi = async id => {
  try {
    await delay(300)
    return id
  } catch {
    throw new Error("Failed to delete task")
  }
}
