import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link, useRouteMatch } from 'react-router-dom';
import * as APP from '../services/apiFilms';
// import MovieDetailsPage from './MovieDetailsPage';

export default function MoviesPage() {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (!keyword) {
      return;
    }

    function imageApiService() {
      APP.fetchMovieByKeyword(keyword).then(setKeyword);
    }

    imageApiService();
  }, [keyword]);

  const handleNameChange = event => {
    setKeyword(event.target.value.toLowerCase());
  };

  APP.fetchMovieByKeyword(keyword).then(console.log);

  const handleFormSubmit = keyword => {
    setKeyword(keyword);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (keyword.trim() === '') {
      return toast.error('Please enter a correct name!');
    }

    handleFormSubmit(keyword);
    setKeyword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by name"
        value={keyword}
        onChange={handleNameChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
