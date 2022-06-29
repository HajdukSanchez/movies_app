import { useState, useEffect } from 'react';

import { movieBD } from '../../api/moviesApi';
import { MovieDetail } from '../../common/interface/details.interface';
import { CreditsResponse } from '../../common/interface/credits.interface';

interface MovieDetails {
  movieData: MovieDetail;
  credits: CreditsResponse;
}

const useMovieDetails = (id: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({} as MovieDetails);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieResponse = movieBD.get<MovieDetail>(`/${id}`);
    const creditsResponse = movieBD.get<CreditsResponse>(`/${id}/credits`);

    const response = await Promise.all([movieResponse, creditsResponse]);

    setMovieDetails({
      movieData: response[0].data,
      credits: response[1].data,
    });

    setisLoading(false);
  };

  return {
    isLoading,
    ...movieDetails,
  };
};

export { useMovieDetails };
