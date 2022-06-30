import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './MovieList.style';
import { Movie } from '../../common/interface/movies.interface';
import { MoviePoster } from '../moviePoster/MoviePoster';

interface MovieListProps {
  movies: Movie[];
  title?: string;
  largePoster?: boolean; // To show large poster
  withBottom?: boolean; // If is true add padding botttom separation
}

const MovieList = ({ movies, title, largePoster = false, withBottom = false }: MovieListProps) => {
  return (
    <View style={{ ...styles.container, paddingBottom: withBottom ? 80 : styles.container.paddingBottom }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => <MoviePoster movie={item} size={largePoster ? 'large' : 'small'} />}
        ItemSeparatorComponent={() => <_Separator />}
        ListHeaderComponent={() => <_Separator />}
        ListFooterComponent={() => <_Separator />}
        snapToInterval={2}
      />
    </View>
  );
};

const _Separator = () => <View style={{ marginHorizontal: 10 }} />;

export { MovieList };
