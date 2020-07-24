import React, { FC, useState } from 'react';
import { Task } from '../services/task';
import TaskItem from './TaskItem';

export interface TaskListProps {
  tasks?: Task[];
  add?: (title: string) => void;
}

const useTitle = (): [string, (input: string) => void] => {
  const [title, setTitle] = useState('');
  const set = (input: string) => {
    setTitle(input);
  };

  return [title, set];
};

const TaskList: FC<TaskListProps> = ({ tasks = [], add = () => undefined }) => {
  const [title, set] = useTitle();
  const onClickAdd = () => {
    add(title);
    set('');
  };

  return (
    <>
      <div className="TaskList">
        {tasks.map(task => (
          <TaskItem task={task} />
        ))}
      </div>
      <div className="NewTaskForm">
        <input type="text" value={title} onChange={e => set(e.target.value)} />
        <input type="button" value="Add" onClick={onClickAdd} />
      </div>
    </>
  );
};

export default TaskList;
