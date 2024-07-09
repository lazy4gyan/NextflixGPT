import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

interface MovieVideo {
  movieId: number;
}

const VideoBackground: React.FC<MovieVideo> = ({ movieId }) => {
  useMovieTrailer({ movieId: movieId });
  const movieTrailer = useSelector(
    (store: RootState) => store.movies?.movieTrailer
  );
  
  return (
    <div className="w-screen ">
      <iframe
       className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&loop=1&autoplay=1&mute=1&controls=0&modestbranding=0&rel=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
