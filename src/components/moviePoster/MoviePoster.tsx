import React from 'react';
import { View, Image } from 'react-native';

import { Movie } from '../../common/interface/nowPlaying.interface';
import { styles } from './MoviePoster.style';

interface MoviePosterProps {
  movie: Movie;
  size?: 'small' | 'large';
}

const MoviePoster = ({ movie, size = 'large' }: MoviePosterProps) => {
  const imageURI = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const imageSize = size === 'large' ? styles.large : styles.small;

  return (
    <View style={[styles.container, imageSize]}>
      <Image source={{ uri: imageURI }} style={styles.image} />
    </View>
  );
};

export { MoviePoster };
