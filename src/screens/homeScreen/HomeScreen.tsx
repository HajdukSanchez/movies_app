import React from 'react';
import { ScrollView } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../../hooks';
import { Loading, MovieList } from '../../components';

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <ScrollView style={{ paddingTop: top }}>
      <MovieList movies={nowPlaying} largePoster />
      <MovieList movies={popular} title={'Popular'} />
      <MovieList movies={topRated} title={'Top Rated'} />
      <MovieList movies={upcoming} title={'Upcoming'} withBottom />
    </ScrollView>
  );
};

export { HomeScreen };
