import React from 'react'
import TasksCard from '../tasks_card'
import { useTasks } from '@/hooks/useTasks';

const TaskList = ({status}: {status?: string}) => {
    const { tasks, isLoading, error } = useTasks(status);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;
  if (!tasks?.length) return <p>No tasks found</p>;

  return (
     <div className="w-full gap-8 flex items-center flex-wrap">
        {tasks.map((task)=> (
            <TasksCard key={task.id} task={task}/>
        ))}

      </div>
  )
}

export default TaskList