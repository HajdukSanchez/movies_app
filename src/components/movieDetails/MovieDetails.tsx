import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Cast } from '../../common/interface/credits.interface';
import { MovieDetail } from '../../common/interface/details.interface';
import { styles } from './MovieDetails.style';
import { setStarIconByRaiting } from '../../common/helpers/stars/stars.helper';

interface MovieDetailsProps {
  movieData: MovieDetail;
  cast: Cast[];
}

const MovieDetails = ({ movieData, cast }: MovieDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <View style={styles.raiting}>
          {setStarIconByRaiting(movieData.vote_average).map(({ type, index }) => (
            <Icon name={type} size={20} style={styles.star} key={index} />
          ))}
          <Text style={styles.date}> {movieData.vote_average}</Text>
        </View>
        <Text style={styles.date}>{movieData.release_date}</Text>
        <Text style={styles.genders}>{movieData.genres.map(gender => gender.name).join(', ')}</Text>
      </View>
    </View>
  );
};

export { MovieDetails };
