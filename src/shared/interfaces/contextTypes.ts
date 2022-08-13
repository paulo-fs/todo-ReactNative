import { TaskType } from "./tasks";

export interface ContextType{
  tasks: TaskType[]
  addNewTask: (newTask: TaskType) => void
  deleteTask: (id: number) => void
  checkTask: (doneTask: TaskType) => void
}