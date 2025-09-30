import React, { useState } from "react";
import { Task } from "@/app/api/client/tasks";
import { useTasks } from "@/hooks/useTasks";

const UpdateForm = ({ task, onClose }: { task: Task; onClose: () => void }) => {
  const { editTask } = useTasks();

  // prefill with existing task values
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    editTask.mutate(
      {
        id: task.id,
        data: {
          title,
          status,
          description,
        },
      },
      {
        onSuccess: () => {
          onClose(); // close modal after successful update
        },
      }
    );
  };

  return (
    <div className="w-full fixed top-0 left-0 h-full bg-[rgba(0,0,0,0.8)] justify-center items-center flex">
      <div
        className="w-[50%] p-5 bg-[#f9f9f9] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl text-[#29A19C] font-semibold mb-4">
          Update this task
        </h3>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[18px] text-[#29A19C] font-semibold">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-6 py-4 border-2 text-[#000000] border-[#29A19C] rounded-sm font-semibold"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-[18px] text-[#29A19C] font-semibold">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "pending" | "in_progress" | "done")}
              className="w-full px-6 py-4 border-2 text-[#000000] border-[#29A19C] rounded-sm font-semibold"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[18px] text-[#29A19C] font-semibold">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter the description"
              className="w-full px-6 py-4 border-2 text-[#000000] border-[#29A19C] rounded-sm font-semibold"
            ></textarea>
          </div>

          <div className="w-full flex justify-between items-center ">
            <button
              type="button"
              className="px-10 py-4 text-lg font-semibold text-[#f9f9f9] bg-[#F05454] cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="px-10 py-4 text-lg font-semibold text-[#f9f9f9] bg-[#29A19C] cursor-pointer"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
