import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getMovieReviews(movieId);
    
        setReviews(data.results);
      } catch (error) {
        console.error('Error  reviews:', error);
      }
    }

    fetchReviews();
  }, [movieId]);

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p><strong>Author:</strong> {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default MovieReviews