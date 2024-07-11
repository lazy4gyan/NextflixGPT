import React from "react";

const ShimmerMovieCard: React.FC = () => {
  return (
    <div className="w-36 md:w-44 pr-6">
      <div className="rounded-lg bg-zinc-800 animate-pulse h-52"></div>
    </div>
  );
};

export default ShimmerMovieCard;