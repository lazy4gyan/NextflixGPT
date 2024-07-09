import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  if (!movies) return;
  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies; // in future i have to replace title with logo of movies

  return (
    <div className="flex w-screen justify-center bg-black bg-blend-difference">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
