import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="w-fit flex px-8 py-2 gap-2 bg-[#29A19C] rounded-lg items-center text-normal font-semibold"
      onClick={onClick}
    >
      <MdOutlineAddCircleOutline className="text-lg font-semibold" />
      Новая задача
    </button>
  );
};

export default AddButton;
