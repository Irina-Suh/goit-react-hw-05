import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList'
 import s from './HomePage.module.css';
import {getMovies } from '../../services/api';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
  
    useEffect(()=> {
      const fetchData = async()=>{
       
        try {
          const data = await getMovies();
          console.log('data home', data)
          setMovies(data.results)
        } catch (error) {
            console.log('error', error)
          
        }
       
      }
      fetchData()
    },[])
    return (
        <section className={s.section}>
        <h1 className={s.title}>Tranding today</h1>
        <MovieList movies={movies} />
      </section>

  );
};
  export default HomePage;


 