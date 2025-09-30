import { Task } from "@/app/api/client/tasks";
import { useTasks } from "@/hooks/useTasks";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import TaskDetailsModal from "../task-details_modal";
import { IoEyeOutline } from "react-icons/io5";
import UpdateForm from "../update_form";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU");
};
const TasksCard = ({ task }: { task: Task }) => {
  const { removeTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);

  return (
    <div className="w-[45%] lg:w-[22%] flex flex-col gap-6 p-3 bg-[#2C3440] border-1 border-[#f9f9f9] rounded-sm mb-4 cursor-pointer">
      <h4 className="text-[#29A19C] text-lg font-semibold">{task.title}</h4>
      <p>{task.description?.slice(0, 40)} ...</p>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#A6CEE3] text-[12px]">{task.status}</p>
        <p className="text-[grey] text-[12px]">{formatDate(task.createdAt)}</p>

        <div className="flex gap-2">
          <IoEyeOutline onClick={() => setShowModal(true)} />
          <FaRegEdit className="" onClick={() => setUpdateForm(true)} />
          <MdOutlineDeleteOutline
            className="text-[#F05454]"
            onClick={() => removeTask.mutate(task.id)}
          />
        </div>
      </div>
      {showModal && (
        <TaskDetailsModal
          title={task.title}
          description={task.description}
          status={task.status}
          createdAt={formatDate(task.createdAt)}
          onClose={() => setShowModal(false)}
        />
      )}
      {updateForm && (
        <UpdateForm task={task} onClose={() => setUpdateForm(false)} />
      )}
    </div>
  );
};

export default TasksCard;
