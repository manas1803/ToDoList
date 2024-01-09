import { createContext, useContext } from "react";

const ToDoListContext = createContext({
    tasks:"",
    setTasks:()=>{}
})

export const ToDoListContextProvider = ToDoListContext.Provider

export const useToDoList = ()=>useContext(ToDoListContext)
