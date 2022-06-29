import React from 'react';
import { View, Image } from 'react-native';

import { Movie } from '../../common/interface/nowPlaying.interface';
import { styles } from './MoviePoster.style';

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster = ({ movie }: MoviePosterProps) => {
  const imageURI = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageURI }} style={styles.image} />
    </View>
  );
};

export { MoviePoster };
