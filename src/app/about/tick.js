import React from "react";

export const Tick = () => {
  return (
    <div className="relative h-[3em] w-[3em] rounded-[1.2em] ">
      <span className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 rounded-[0.8em] bg-amber-50 shadow-[inset_-1px_1px_4px_0px_#fff7ed,inset_1px_-1px_4px_0px_#f59e0b,-1px_1px_2px_0px_#f59e0b] duration-[200ms] peer-checked:shadow-[inset_1px_-1px_4px_0px_#fff7ed,inset_-1px_1px_4px_0px_#f59e0b]"></span>

      <svg
        fill="#b45309"
        viewBox="-3.2 -3.2 38.40 38.40"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 peer-checked:opacity-0 transition-opacity duration-200"
      >
        <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"></path>
      </svg>
    </div>
  );
};

export default Tick;
