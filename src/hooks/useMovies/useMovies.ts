import { useEffect, useState } from 'react';

import { movieBD } from '../../api/moviesApi';
import { Movie, NowPlaying } from '../../common/interface/nowPlaying.interface';

const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const reponse = await movieBD.get<NowPlaying>('/now_playing');
    setNowPlayingMovies(reponse.data.results);
    setIsLoading(false);
  };

  return {
    nowPlayingMovies,
    isLoading,
  };
};

export { useMovies };
