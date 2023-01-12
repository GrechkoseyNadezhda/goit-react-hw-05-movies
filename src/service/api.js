import axios from 'axios';

const instanceMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'e8cfb2399c5839ccef43fa2b99e0f6a1',
  },
});

export const getTrendingMovie = async () => {
  const { data } = await instanceMovie.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async (query, page) => {
  const { data } = await instanceMovie.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await instanceMovie.get(`/movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instanceMovie.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instanceMovie.get(`/movie/${id}/reviews`);
  return data;
};
