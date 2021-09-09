import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APP from '../services/apiFilms';

// APP.fetchTrendingMovie().then(console.log);

// APP.fetchMovieGanres().then(console.log);

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  // console.log(url);

  useEffect(() => {
    APP.fetchTrendingMovie().then(setMovie);
  }, []);

  // console.log(movie);

  return (
    <>
      <PageHeading title="Trending today" />

      <ul className="trending__today">
        {movie &&
          movie.map(movie => (
            <li key={movie.id} className="trending__today--movie">
              <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
