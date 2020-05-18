import React from 'react';
// Importing Link from react-dom
import { Link, useRouteMatch } from 'react-router-dom';


const MovieList = props => {
  // defining props
  // const {movies} = props

  // using useRouteMatch()
  const { url } = useRouteMatch()
  // debugger
  return (
    <div className="movie-list">
      {/* Deleted props after defining them && adding a LINK*/}

      {props.movies.map(movie => (

        <MovieDetails key={movie.id} movie={movie} />

      ))}
    </div>

  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;

  const {url} = useRouteMatch()

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
