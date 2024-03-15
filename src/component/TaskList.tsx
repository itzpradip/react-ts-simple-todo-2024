import { ReactNode } from "react";
import { TaskType } from "../App";
import Task from "./Task";
import InfoBox from "./InfoBox";

type TaskListType = {
  tasks: Array<TaskType>;
  onDeleteTask: (id: number) => void;
};

const TaskList = ({ tasks, onDeleteTask }: TaskListType) => {
  if( tasks.length === 0 ) {
    return(
      <InfoBox mode="hint">
        <p>You have no task for today. Start adding some!</p>
      </InfoBox>
    );
  }

  let warningBox:ReactNode;

  if( tasks.length >= 4 ) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        <p>You're adding too many tasks for the day. Don't put too much pressure on you.</p>
      </InfoBox>
    );
  }

  return (
    <>
    {warningBox}
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task id={task.id} title={task.title} onDelete={onDeleteTask}>
            <p>{task.description}</p>
          </Task>
        </li>
      ))}
    </ul>
    </>
  );
};

export default TaskList;
