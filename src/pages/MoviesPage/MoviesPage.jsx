import React, {  useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css'
import toast from 'react-hot-toast';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
  
    async function fetchMovies() {
      try {
        const data = await searchMovies(query);
        if (data.results.length === 0) {
          toast.error('Nothing found. Try another query.');}
        setMovies(data.results);
      } catch (error) {
        console.error('Error searching :', error);
      }
    }
  
    fetchMovies();
  }, [query]);
  

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
    form.reset();
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
      { movies.length > 0  && <MovieList movies={movies} />}
    </div>
  )
}

export default MoviesPage