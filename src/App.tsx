import { useState } from "react";
import Header from "./component/Header";
import headerImg from "./assets/react.svg";
import TaskList from "./component/TaskList";
import NewTask from "./component/NewTask";

export type TaskType = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleAddTask = (task: string, details: string) => {
    setTasks((prevTask) => {
      const newTask: TaskType = {
        id: Math.random(),
        title: task,
        description: details,
      };

      return [...prevTask, newTask];
    });
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTask => prevTask.filter(task => task.id !== id));
  }

  return (
    <main>
      <Header image={{ src: headerImg, alt: "A Simple To-DO App" }}>
        <h1>My Tasks</h1>
      </Header>
      <NewTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
};

export default App;
