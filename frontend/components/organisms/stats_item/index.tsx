import React from "react";

interface StatsItemProps {
  title: string;
  total: number;
}
const StatsItem = ({ ...props }: StatsItemProps) => {
  return (
    <div className="flex flex-col gap-3 items-center w-[20%]">
      <p className="text-[#F9F9F9] text-[12px] font-semibold">{props.title}</p>
      <div className="flex flex-col w-full h-fit rounded-xl gap-1 border-1 border-[#29A19C] items-center py-3 px-6">
        <p className="text-[#29A19C] text-[36px] font-semibold">{props.total}</p>
        <p className="text-[12px]">задач</p>
      </div>
    </div>
  );
};

export default StatsItem;
