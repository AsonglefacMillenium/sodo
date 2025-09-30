import { Task } from "@/app/api/client/tasks";
import StatsSection from "@/components/templates/stats_section";
import TasksSection from "@/components/templates/tasks_section";
import { useTasks } from "@/hooks/useTasks";
import React from "react";

const HomeScreen = () => {
  const { tasks } = useTasks();
  return (
    <div className="w-full flex flex-col gap-8">
      <StatsSection tasks={tasks as Task[]} />
      <TasksSection />
    </div>
  );
};

export default HomeScreen;
