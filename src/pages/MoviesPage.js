import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import * as APP from '../services/apiFilms';
import Searchbar from '../components/Searchbar/Searchbar';
// import MovieDetailsPage from './MovieDetailsPage';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MoviesPage() {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  // const query = new URLSearchParams(location.search).get('query');

  // console.log(url);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    function moviesApiService() {
      setStatus(Status.PENDING);

      APP.fetchMovieByKeyword(keyword)
        .then(movie => {
          if (movie.length === 0) {
            setStatus(Status.REJECTED);
            toast.error(
              'Something went wrong! Please enter a correct request.',
            );
            return;
          }

          setMovies(movie);
          setStatus(Status.RESOLVED);
          toast.success('Congratulations! You found your movie.');
        })
        .catch(
          () => setStatus(Status.REJECTED),
          // toast.error('Something went wrong! Please try again!'),
        )
        .finally(() => setStatus(Status.IDLE));
    }

    moviesApiService();
  }, [keyword]);

  const handleFormSubmit = keyword => {
    setKeyword(keyword);
    setStatus(Status.PENDING);

    history.push({
      ...location,
      search: `query=${keyword}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className="trending__today--movie">
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
      <ToastContainer autoClose={3000} />
    </>
  );
}
