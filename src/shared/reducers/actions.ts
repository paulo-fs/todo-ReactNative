import { TaskType } from "../interfaces/tasks";

export enum Actions{
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  DELETE_TASK = 'DELETE_TASK',
  SET_TASK_DONE = 'SET_TASK_DONE'
}

export function addNewTaskAction(newTask: TaskType){
  return {
    type: Actions.ADD_NEW_TASK,
    payload: { newTask }
  }
}

export function deleteTaskAction(taskId: number){
  return {
    type: Actions.DELETE_TASK,
    payload: { taskId }
  }
}

export function setTaskDoneAction(doneTask: TaskType){
  return {
    type: Actions.SET_TASK_DONE,
    payload: { doneTask }
  }
}