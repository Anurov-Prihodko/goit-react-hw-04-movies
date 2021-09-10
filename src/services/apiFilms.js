const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6ebf2e47998d69c600352a2debdd07c8';

function fetchTrendingMovie() {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`No movie are available on this request`),
      );
    })
    .then(response => response.results);
}

function fetchMovieById(filmId) {
  return fetch(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('No movie are available on this request'),
      );
    },
  );
}

function fetchMovieByActors(filmId) {
  return fetch(`${BASE_URL}movie/${filmId}/credits?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('No movie are available on this request'),
      );
    },
  );
}

function fetchMovieByReviews(filmId) {
  return fetch(`${BASE_URL}movie/${filmId}/reviews?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('No movie are available on this request'),
      );
    },
  );
}

function fetchMovieByKeyword(keyword) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then(response => response.json())
    .then(resp => resp.results);
}

export {
  fetchMovieByKeyword,
  fetchMovieById,
  fetchTrendingMovie,
  fetchMovieByActors,
  fetchMovieByReviews,
  API_KEY,
};

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '22328016-b5b8589f64a6d5a0340d8aa33';
// const NUMBER_OF_PHOTOS = 12;

// function fetchImages(requestName, numPage = 1) {
//   return fetch(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=${requestName}&page=${numPage}&per_page=${NUMBER_OF_PHOTOS}&key=${API_KEY}`,
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(`No images are available on request: ${requestName}`),
//     );
//   });
// }

// export { fetchImages, NUMBER_OF_PHOTOS };
