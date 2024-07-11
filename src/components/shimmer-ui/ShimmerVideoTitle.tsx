import React from "react";

const ShimmerVideoTitle: React.FC = () => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 text-white absolute bg-gradient-to-r from-black">
      <div className="animate-pulse">
        <div className="h-16 bg-zinc-800 rounded w-1/2 mb-6"></div>
        <div className="space-y-2 w-1/3 mb-8">
          <div className="h-4 bg-zinc-800 rounded"></div>
          <div className="h-4 bg-zinc-800 rounded"></div>
        </div>
        <div className="flex space-x-4">
          <div className="flex justify-center gap-2 items-center bg-zinc-800 p-4 px-16 text-xl rounded-lg w-40 h-12"></div>
          <div className="flex justify-center gap-2 items-center bg-zinc-800 p-4 px-16 text-xl rounded-lg w-40 h-12"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoTitle;
