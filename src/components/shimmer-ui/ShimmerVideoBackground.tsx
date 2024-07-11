import React from "react";

const ShimmerVideoBackground: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="w-screen aspect-video bg-zinc-800 animate-pulse"></div>
    </div>
  );
};

export default ShimmerVideoBackground;
