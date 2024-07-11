import ShimmerMovieCard from "./ShimmerMovieCard";

const ShimmerMovieList: React.FC = () => {
  const shimmerArray = new Array(10).fill(0); 
  return (
    <div className="pl-11 py-4 mt-2">
      <div className="h-6 bg-zinc-800 rounded w-48 mb-4 animate-pulse"></div>
      <div className="flex overflow-x-scroll no-scrollbar py-3 no-scrollbar">
        {shimmerArray.map((_, index) => (
          <div key={index}>
            <ShimmerMovieCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMovieList;
