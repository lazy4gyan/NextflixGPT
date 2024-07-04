import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();
    // console.log("useNowPlayingMovies",data.results)
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
