import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css'
const MovieList = ({movies }) => {
  const location = useLocation();
console.log('movies', movies)
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} >
          <div className={s.item}>
          <img className={s.picture}
            src={ movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`
              : '../../images/depositphotos_224693828-stock-illustration-video-linear-icon-video-concept.webp'}
            alt={movie.title}
            
          />
          <Link to={`/movies/${movie.id}`} state={{ from: location }} className={s.link}>
            {movie.title } 
          </Link>
          </div>
        </li> 
      ))}
    </ul>
  )
}

export default MovieList