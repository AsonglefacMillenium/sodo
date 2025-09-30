// import StatsItem from "@/components/organisms/stats_item";
// import TaskList from "@/components/organisms/task_list";
// import TasksCard from "@/components/organisms/tasksCard";
// import React, { useState } from "react";

// const TasksSection = () => {
//   const [statusFilter, setStatusFilter] = useState<string | undefined>();

//   return (
//     <div className="w-full bg-[#2C3440] p-5 flex flex-col gap-2 rounded-[10px]">
//       <div className="w-full flex justify-between items center">
//         <h3 className="text-capitalized text-[#29A19C] text-lg font-semibold">
//           Задачи
//         </h3>

//         <div className="flex gap-4 items-center">
//           <div className="w-fit px-4 py-1 bg-[#2C3440] text-[#f9f9f9] text-sm">
//             All
//           </div>
//           <div className="w-fit px-4 py-1  border-[#2C3440] text-[#f9f9f9] text-sm">
//             Pending
//           </div>
//           <div>In Progress</div>
//           <div>Done</div>
//         </div>
//       </div>

//       <TaskList status={statusFilter} />
//     </div>
//   );
// };

// export default TasksSection;



import TaskList from "@/components/organisms/task_list";
import React, { useState } from "react";

const TasksSection = () => {
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);

  return (
    <div className="w-full min-h-[100vh] bg-[#2C3440] p-5 flex flex-col gap-2 rounded-[10px]">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-capitalized text-[#29A19C] text-lg font-semibold">
          Задачи
        </h3>

        <div className="flex gap-4 items-center">
          <button
            className={`px-4 py-1 text-sm rounded ${
              !statusFilter ? "bg-[#29A19C] text-white" : "bg-[#2C3440] text-[#f9f9f9]"
            }`}
            onClick={() => setStatusFilter(undefined)}
          >
            All
          </button>

          <button
            className={`px-4 py-1 text-sm rounded ${
              statusFilter === "pending"
                ? "bg-[#29A19C] text-white"
                : "bg-[#2C3440] text-[#f9f9f9]"
            }`}
            onClick={() => setStatusFilter("pending")}
          >
            Pending
          </button>

          <button
            className={`px-4 py-1 text-sm rounded ${
              statusFilter === "in_progress"
                ? "bg-[#29A19C] text-white"
                : "bg-[#2C3440] text-[#f9f9f9]"
            }`}
            onClick={() => setStatusFilter("in_progress")}
          >
            In Progress
          </button>

          <button
            className={`px-4 py-1 text-sm rounded ${
              statusFilter === "done"
                ? "bg-[#29A19C] text-white"
                : "bg-[#2C3440] text-[#f9f9f9]"
            }`}
            onClick={() => setStatusFilter("done")}
          >
            Done
          </button>
        </div>
      </div>

      <TaskList status={statusFilter} />
    </div>
  );
};

export default TasksSection;
