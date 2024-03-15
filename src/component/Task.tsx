import { PropsWithChildren, ReactNode } from "react";

// interface TaskType {
//   title: string;
//   children: ReactNode;
// };

type TaskType = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>

const Task = ({ id, title, children, onDelete }: TaskType) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default Task;
