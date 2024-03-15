import React, { FormEvent, useRef } from 'react'

type NewTaskType = {
  onAddTask: (task: string, details: string) => void;
};

const NewTask = ({onAddTask} : NewTaskType) => {
  const task = useRef<HTMLInputElement>(null);
  const details = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTask = task.current!.value;
    const enteredDetails = details.current!.value;

    onAddTask(enteredTask, enteredDetails);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='task'>Your Task</label>
        <input type='text' id='task' ref={task} />
      </p>
      <p>
        <label htmlFor='details'>Your Task Details</label>
        <input type='text' id='details' ref={details} />
      </p>
      <p>
        <button>Add Task</button>
      </p>
    </form>
  )
}

export default NewTask