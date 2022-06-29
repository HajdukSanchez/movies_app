import React from 'react';
import { View, Text } from 'react-native';

import { useMovies } from '../../hooks';
import { Loading } from '../../components';
import { Movie } from '../../common/interface/nowPlaying.interface';

const HomeScreen = () => {
  const { nowPlayingMovies, isLoading } = useMovies();

  if (isLoading) return <Loading />;

  return (
    <View>
      {nowPlayingMovies.map((movie: Movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  );
};

export { HomeScreen };
