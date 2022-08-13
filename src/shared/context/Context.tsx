import { createContext, ReactNode, useState } from "react";

interface ChildrenType {
  children: ReactNode
}

interface ContextType{}

export const Context = createContext({} as ContextType);

export function ContextProvider({ children }: ChildrenType){
  const [tasks, setTasks] = useState([]);
  return(
    <Context.Provider 
      value={
        tasks
      }
    >
      { children }
    </Context.Provider>
  )
}