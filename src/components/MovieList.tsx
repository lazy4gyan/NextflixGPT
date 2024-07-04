import React from 'react'
import { Movie } from '../store/movieSlice'
import MovieCard from './MovieCard';

interface List{
    title:string;
    list:Movie[];
}
const MovieList:React.FC<List> = ({title,list}) => {
    console.log(list)
  return (
    <div>
        <h1>{title}</h1>
      <div className='flex overflow-x-scroll py-3 no-scrollbar'>
        {
          list.map(movie =>{
            return(
              <MovieCard poster_path={movie.poster_path}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default MovieList
