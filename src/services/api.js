import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJhNjhhZjhjZGY3YmI1ZDBjZDIzNDZiYTUyMTYxNiIsIm5iZiI6MTc0NTE2MDI1Ni40NjIwMDAxLCJzdWIiOiI2ODA1MDg0MDI3NmJmNjRlNDFhYThiMzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wm3poe6LMsnTjbbFI5K0lsv0EloAzh21ziwhiVGxO_8';

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export async function getMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`,
    options
  );
  return response.data;
}


export async function getMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  return response.data;
}


export async function getMovieCast(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return response.data;
}


