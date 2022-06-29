import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './MovieList.style';
import { Movie } from '../../common/interface/nowPlaying.interface';
import { MoviePoster } from '../moviePoster/MoviePoster';

interface MovieListProps {
  movies: Movie[];
  title: string;
  withBottom?: boolean; // If is true add padding botttom separation
}

const MovieList = ({ movies, title, withBottom = false }: MovieListProps) => {
  return (
    <View style={{ ...styles.container, paddingBottom: withBottom ? 100 : styles.container.paddingVertical }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => <MoviePoster movie={item} size={'small'} />}
        ItemSeparatorComponent={() => <_Separator />}
        ListHeaderComponent={() => <_Separator />}
        ListFooterComponent={() => <_Separator />}
      />
    </View>
  );
};

const _Separator = () => <View style={{ marginHorizontal: 10 }} />;

export { MovieList };
