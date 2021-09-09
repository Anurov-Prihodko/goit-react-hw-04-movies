import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import * as APP from '../services/apiFilms';

export default function MovieDetailsPage(movieId) {
  const [moviePage, setMoviePage] = useState(null);

  useEffect(() => {
    APP.fetchMovieById('497698').then(setMoviePage);
  }, [movieId]);

  console.log(moviePage);

  return (
    <>
      {moviePage && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${moviePage.poster_path}?api_key=${APP.API_KEY}`}
              alt=""
            />
          </div>
          <div>
            <h2>{moviePage.original_title}</h2>
            <p>User Score: {moviePage.vote_average}</p>
            <h3>Overview</h3>
            <p>{moviePage.overview}</p>
            <h3>Genres</h3>
            <ul>
              {moviePage.genres.map(genre => (
                <li>{genre.name}</li>
              ))}
            </ul>
            <p></p>
          </div>
        </>
      )}
    </>
  );
}
