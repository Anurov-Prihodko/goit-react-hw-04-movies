import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom';
import * as APP from '../services/apiFilms';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [moviePage, setMoviePage] = useState(null);

  useEffect(() => {
    APP.fetchMovieById(movieId).then(setMoviePage);
  }, [movieId]);

  // console.log(moviePage);

  return (
    <>
      {moviePage && (
        <>
          <div className="container__card">
            <div>
              <img
                className="movie__img"
                src={`https://image.tmdb.org/t/p/w300${moviePage.poster_path}?api_key=${APP.API_KEY}`}
                alt={moviePage.original_title}
              />
            </div>
            <div className="movie__description">
              <h2 className="movie__title">{moviePage.original_title}</h2>
              <p className="movie__title">
                User Score: {moviePage.vote_average}
              </p>
              <h3 className="movie__title">Overview:</h3>
              <p className="movie__title">{moviePage.overview}</p>
              <h3 className="movie__title">Genres:</h3>
              <ul className="movie__item">
                {moviePage.genres.map(genre => (
                  <li key={genre.id} className="movie__list">
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <p className="info__title">Additional information</p>
          <ul className="movie__info--item">
            <Link className="movie__info--list" to={`${url}/cast`}>
              😎 Cast
            </Link>
            <Link className="movie__info--list" to={`${url}/reviews`}>
              ✍ Reviews
            </Link>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/movies/:movieId/cast">
              <Cast />
            </Route>

            <Route path="/movies/:movieId/reviews">
              <div className="reviews__text">
                <Reviews />
              </div>
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}
