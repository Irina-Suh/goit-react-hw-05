import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import s from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/movies');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(movieId);
        console.log('data details:', data);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const { poster_path, title, overview, genres, vote_average } = movie;

  return (
    <div  className={s.container}>
      <Link to={backLink.current}> Go back</Link>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            width="300"
          />
        )}
        <div>
          <h2>{title}</h2>
          <p><strong>Rating:</strong> {vote_average}</p>
          <p><strong>Overview:</strong> {overview}</p>
          <p><strong>Genres:</strong> {genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <hr />

      <h3>Additional information</h3>
      <ul className='list'>
        <li ><NavLink to="cast">Cast</NavLink></li>
        <li><NavLink to="reviews">Reviews</NavLink></li>
      </ul>

      <Suspense fallback={<p>Loading info...</p>}>
        <Outlet />
      </Suspense>
      </div>
   
   
  )
}

export default MovieDetailsPage