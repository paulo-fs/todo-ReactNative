export interface TaskType{
  id: number
  message: string
  isDone: boolean
}

export interface TaskState {
  tasks: TaskType []
}