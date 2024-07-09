import React from "react";
import { Movie } from "../store/movieSlice";
import MovieCard from "./MovieCard";

interface List {
  title: string;
  list: Movie[];
}
const MovieList: React.FC<List> = ({ title, list }) => {
  return (
    <div className="pl-11 py-4 mt-2">
      <h1 className="text-2xl text-white text-bold drop-shadow-sm">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar py-3 no-scrollbar">
        {list?.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard poster_path={movie.poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
