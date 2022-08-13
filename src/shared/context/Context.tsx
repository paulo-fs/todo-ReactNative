import { useReducer } from "react";
import { createContext, ReactNode } from "react";

import { addNewTaskAction, deleteTaskAction, setTaskDoneAction } from "../reducers/actions";
import { reducers } from "../reducers/reducer";

import { ContextType } from "../interfaces/contextTypes";
import { TaskState, TaskType } from "../interfaces/tasks";

interface ChildrenType {
  children: ReactNode
}

export const Context = createContext({} as ContextType);


export function ContextProvider({ children }: ChildrenType){
  const [tasks, dispatch] = useReducer(reducers, []);

  function addNewTask(newTask: TaskType){
    dispatch(addNewTaskAction(newTask));
  }

  function deleteTask(id: number){
    dispatch(deleteTaskAction(id))
  }

  function checkTask(doneTask: TaskType){
    dispatch(setTaskDoneAction(doneTask))
  }

  return(
    <Context.Provider 
      value={{
        tasks,
        addNewTask,
        deleteTask,
        checkTask
      }}
    >
      { children }
    </Context.Provider>
  )
}