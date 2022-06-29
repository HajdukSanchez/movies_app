import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../../hooks';
import { Loading, MovieList, MoviePoster } from '../../components';
import { styles } from './HomeScreen.style';

const HomeScreen = () => {
  const { nowPlayingMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <ScrollView style={{ paddingTop: top }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={nowPlayingMovies}
        renderItem={({ item }) => <MoviePoster movie={item} />}
        ItemSeparatorComponent={() => <_Separator />}
        ListHeaderComponent={() => <_Separator />}
        ListFooterComponent={() => <_Separator />}
      />
      <MovieList movies={nowPlayingMovies} title={'On Theater'} />
      <MovieList movies={nowPlayingMovies} title={'On Theater 2'} />
      <MovieList movies={nowPlayingMovies} title={'On Theater 3'} />
      <MovieList movies={nowPlayingMovies} title={'On Theater 4'} withBottom />
    </ScrollView>
  );
};

const _Separator = () => <View style={{ marginHorizontal: 10 }} />;

export { HomeScreen };
