import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
interface MovieTitle {
  title: string;
  overview: string;
}

const VideoTitle: React.FC<MovieTitle> = ({ title, overview }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className="w-screen aspect-video pt-[25%] px-24  text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p
        className={`py-6 text-lg w-1/3 ${
          isExpanded ? "" : "line-clamp-2"
        } mb-8`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {overview}
      </p>
      <div className="flex">
        <button className="flex justify-center gap-2 items-center bg-white text-black p-4 px-16 text-xl rounded-lg hover:bg-opacity-95">
          <FaPlay /> Play
        </button>
        <button className="flex justify-center gap-2 items-center bg-white text-black p-4 px-16 text-xl rounded-lg mx-2 hover:bg-opacity-95">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
