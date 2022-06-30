import React from 'react';
import { View, Text, Image, useWindowDimensions, ScrollView, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { getImageURI } from '../../common/helpers';
import { styles } from './DetailScreen.style';
import { useMovieDetails } from '../../hooks';
import { MovieDetails } from '../../components';

interface DetailScreenProps extends StackScreenProps<RootStackParamList, 'Detail'> {}

const DetailScreen = ({
  route: {
    params: { movie },
  },
}: DetailScreenProps) => {
  const { isLoading, movieData, credits } = useMovieDetails(movie.id);
  const imageURI = getImageURI(movie.poster_path);
  const { height } = useWindowDimensions();

  return (
    <ScrollView>
      <View style={{ ...styles.posterContainer, height: height * 0.7 }}>
        <Image source={{ uri: imageURI }} style={styles.poster} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.subTitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator size={35} color="red" style={styles.loading} />
      ) : (
        <MovieDetails movieData={movieData} cast={credits.cast} />
      )}
    </ScrollView>
  );
};

export { DetailScreen };
