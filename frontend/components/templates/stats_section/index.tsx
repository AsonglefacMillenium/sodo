import { Task } from "@/app/api/client/tasks";
import StatsItem from "@/components/organisms/stats_item";
import React from "react";

type StatsSectionProps = {
  tasks: Task[];
};

const StatsSection = ({tasks}: StatsSectionProps) => {

  const total = tasks?.length;
  const pending = tasks?.filter(t => t.status === "pending")?.length;
  const inProgress = tasks?.filter(t => t.status === "in_progress")?.length;
  const done = tasks?.filter(t => t.status === "done")?.length;
  return (
    <div className="w-full bg-[#2C3440] p-5 flex flex-col gap-2 rounded-[10px]">
      <h3 className="text-capitalized text-[#29A19C] text-lg font-semibold">
        Статистика задач
      </h3>
      <div className="w-full gap-32 flex items-center ">
        <StatsItem title="Создано" total={total} />
        <StatsItem title="Завершено" total={done} />
        <StatsItem title="В процессе" total={inProgress} />
        <StatsItem title="Ожидаемый" total={pending} />
      </div>
    </div>
  );
};

export default StatsSection;
