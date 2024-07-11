import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import ShimmerVideoTitle from "./shimmer-ui/ShimmerVideoTitle";
import ShimmerVideoBackground from "./shimmer-ui/ShimmerVideoBackground";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );

  if (!movies) {
    return (
      <div className="flex w-screen justify-center bg-black bg-blend-difference">
        <ShimmerVideoBackground />
        <ShimmerVideoTitle />
      </div>
    );
  }

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie; // in future i have to replace title with logo of movies

  return (
    <div className="flex w-screen justify-center bg-black bg-blend-difference">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;

