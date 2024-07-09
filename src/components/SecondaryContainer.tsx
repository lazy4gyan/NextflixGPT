import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../store/appStore";

const SecondaryContainer = () => {
  const moviesList = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  return (
    // <div className="bg-black w-screen">
    <div className="bg-black w-screen">

      <div className="-mt-[20%] pl-12 z-10 relative">
        <MovieList title={"Now Playing Movies"} list={moviesList || []} />
        <MovieList title={"Trending"} list={moviesList || []} />
        <MovieList title={"Popular"} list={moviesList || []} />
        <MovieList title={"Latest Movies"} list={moviesList || []} />
        <MovieList title={"Upcoming Movies"} list={moviesList || []} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

// MovieList -
// Populer
