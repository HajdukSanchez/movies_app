import { useEffect, useState } from 'react';

import { movieBD } from '../../api/moviesApi';
import { Movie, MoviesResponse } from '../../common/interface/movies.interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  const [moviesData, setMoviesData] = useState<MoviesState>({} as MoviesState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const nowPlayingReponse = movieBD.get<MoviesResponse>('/now_playing');
    const popularReponse = movieBD.get<MoviesResponse>('/popular');
    const topRatedReponse = movieBD.get<MoviesResponse>('/top_rated');
    const upcomingReponse = movieBD.get<MoviesResponse>('/upcoming');

    const response = await Promise.all([nowPlayingReponse, popularReponse, topRatedReponse, upcomingReponse]);

    setMoviesData({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  return {
    ...moviesData,
    isLoading,
  };
};

export { useMovies };
