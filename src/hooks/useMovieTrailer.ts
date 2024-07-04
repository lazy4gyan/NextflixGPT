import { useEffect } from "react";
import { addMovieTrailer } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
interface MovieVideo {
  movieId: number;
}

const useMovieTrailer = (props: MovieVideo) => {
const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.movieId}/videos?language=en-US`;
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];

    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
