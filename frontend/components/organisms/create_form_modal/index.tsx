import { useTasks } from "@/hooks/useTasks";
import React, { useState } from "react";

const CreateFormModal = ({ onClose }: { onClose: () => void }) => {

    const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    addTask.mutate({ title, description, status: "pending" });
    setTitle("");
    setDescription("");
    onClose()
  };
  return (

    
    <div className="w-full fixed h-full bg-[rgba(0,0,0,0.8)] justify-center items-center flex">
      <div className="w-[50%] p-5 bg-[#f9f9f9] rounded-lg">
        <h3 className="text-xl text-[#29A19C] font-semibold mb-4">
          Create a new task
        </h3>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor=""
              className="text-[18px] text-[#29A19C] font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter the title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-6 py-4 border-2 text-[#000000] border-[#29A19C] rounded-sm font-semibold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-[18px] text-[#29A19C] font-semibold"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter the descriotion"
              onChange={(e) => setDescription(e.target.value)}
              id=""
              className="w-full px-6 py-4 border-2 text-[#000000] border-[#29A19C] rounded-sm font-semibold"
            ></textarea>
          </div>

          <div className="w-full flex justify-between items-center ">
            <button
              className="w-fit flex items-center justify-center px-10 py-4 text-lg font-semibold text-[#f9f9f9] bg-[#F05454] cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
            <button type="submit" className="w-fit flex items-center justify-center px-10 py-4 text-lg font-semibold text-[#f9f9f9] bg-[#29A19C] cursor-pointer">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFormModal;
