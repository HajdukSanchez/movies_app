import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Cast } from '../../common/interface/credits.interface';
import { MovieDetail } from '../../common/interface/details.interface';
import { styles } from './MovieDetails.style';
import { setStarIconByRaiting } from '../../common/helpers/stars/stars.helper';
import { API_RESPONSE_LANGUAGE } from '@env';

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
          <Text style={styles.date}> {movieData.vote_average / 2}</Text>
        </View>
        <Text style={styles.date}>{movieData.release_date}</Text>
        <Text style={styles.genders}>{movieData.genres.map(gender => gender.name).join(', ')}</Text>
        <Text style={styles.text}>{movieData.overview}</Text>
        <View style={styles.budget}>
          <Text style={styles.title}>Budget</Text>
          <Text style={styles.text}>
            {new Intl.NumberFormat(API_RESPONSE_LANGUAGE, { style: 'currency', currency: 'USD' }).format(
              movieData.budget,
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export { MovieDetails };
