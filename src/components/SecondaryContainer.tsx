import { useSelector } from "react-redux"
import MovieList from "./MovieList";
import { RootState } from "../store/appStore";

const SecondaryContainer = () => {
  const moviesList = useSelector((store:RootState) => store.movies?.nowPlayingMovies )
  return (
    <div>
      <MovieList title={'Now Playing Movies'} list={moviesList} />
    </div>
  )
}

export default SecondaryContainer


// MovieList - 
// Populer
 