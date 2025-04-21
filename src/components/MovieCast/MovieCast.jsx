import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import s from './MovieCast.module.css'
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getMovieCast(movieId);
      
        setCast(data.cast);
      } catch (error) {
        console.error('Errorcast:', error);
      }
    }

    fetchCast();
  }, [movieId]);

  if (!cast.length) return <p>No cast information.</p>;

  return (
    <ul  className= {s.cast}>
      {cast.map(actor => (
        
        <li key={actor.cast_id} className={s.itemContainer}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
          )}
          <p>{actor.name} as {actor.character}</p>
        </li>
        
      ))}
    </ul>
  )
}

export default MovieCast