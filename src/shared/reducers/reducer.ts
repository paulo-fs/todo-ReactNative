import { TaskType } from "../interfaces/tasks";
import { Actions } from "./actions";

export function reducers(state: TaskType[], action: any){
  switch(action.type){
    case Actions.ADD_NEW_TASK:
      return [...state, action.payload.newTask]
    case Actions.DELETE_TASK:
      const id = action.payload.taskId
      const filteredList = state.filter(task => task.id !== id);
      return filteredList
    case Actions.SET_TASK_DONE:
      console.log(action.payload.doneTask)
      return state
    default:
      return state;
  }
}