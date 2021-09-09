import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import * as APP from '../services/apiFilms';
// import MovieDetailsPage from './MovieDetailsPage';

export default function MoviesPage() {
  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by name"
        // value={requestName}
        // onChange={handleNameChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
