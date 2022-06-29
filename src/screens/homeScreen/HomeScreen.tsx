import React from 'react';
import { View, FlatList } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../../hooks';
import { Loading, MoviePoster } from '../../components';
import { styles } from './HomeScreen.style';

const HomeScreen = () => {
  const { nowPlayingMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Loading />;

  return (
    <View style={{ ...styles.container, marginTop: top }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={nowPlayingMovies}
        renderItem={({ item }) => <MoviePoster movie={item} />}
        ItemSeparatorComponent={() => <_Separator />}
        ListHeaderComponent={() => <_Separator />}
        ListFooterComponent={() => <_Separator />}
      />
    </View>
  );
};

const _Separator = () => <View style={{ marginHorizontal: 10 }} />;

export { HomeScreen };
