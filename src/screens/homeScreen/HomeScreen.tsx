import React from 'react';
import { View, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../../hooks';
import { Loading, MoviePoster } from '../../components';
import { Movie } from '../../common/interface/nowPlaying.interface';

const HomeScreen = () => {
  const { nowPlayingMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <View style={{ marginTop: top }}>
      {/* {nowPlayingMovies.map((movie: Movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))} */}
      <MoviePoster movie={nowPlayingMovies[0]} />
    </View>
  );
};

export { HomeScreen };
