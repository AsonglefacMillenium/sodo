import React from "react";

interface TaskDetailsModalProps {
  title: string;
  description?: string;
  createdAt: string;
  status: string;
  onClose: () => void;
}

const TaskDetailsModal = ({ ...props }: TaskDetailsModalProps) => {
  return (
    <div className="w-full fixed top-0 left-0 h-full bg-[rgba(0,0,0,0.8)] justify-center items-center flex">
      <div
        className="w-[40%] p-5 bg-[#f9f9f9] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-black text-xl">Tilte</p>
        <h3 className="text-2xl text-[#29A19C] font-semibold mb-4">
          {props.title}
        </h3>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col w-full gap-3">
              <p className="text-black text-xl">Description:</p>
              <p className="text-[#222831] text-lg">{props.description}</p>
            </div>

            <div className="flex justify-betweeen w-full gap-16">
              <div className="flex flex-col w-fit gap-3 ">
                <p className="text-black">Status</p>
                <p className="text-[#A6CEE3]">{props.status}</p>
              </div>
              <div className="flex flex-col w-fit gap-3 ">
                <p className="text-black ">Date Created</p>
                <p className="text-[grey] ">{props.createdAt}</p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end items-center ">
            <button
              className="w-fit flex items-center justify-center px-10 py-4 text-lg font-semibold text-[#f9f9f9] bg-[#F05454] cursor-pointer"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
