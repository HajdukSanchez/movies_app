import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Movie } from '../../common/interface/movies.interface';
import { styles } from './MoviePoster.style';
import { RootStackParamList } from '../../routes';
import { getImageURI } from '../../common/helpers';

interface MoviePosterProps {
  movie: Movie;
  size?: 'small' | 'large';
}

const MoviePoster = ({ movie, size = 'large' }: MoviePosterProps) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  const imageURI = getImageURI(movie.poster_path);
  const imageSize = size === 'large' ? styles.large : styles.small;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('Detail', { movie })} style={{ paddingBottom: 10 }}>
      <View style={[styles.container, imageSize]}>
        <Image source={{ uri: imageURI }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export { MoviePoster };
