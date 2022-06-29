import React from 'react';
import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '../../routes';
import { getImageURI } from '../../common/helpers';
import { styles } from './DetailScreen.style';

interface DetailScreenProps extends StackScreenProps<RootStackParamList, 'Detail'> {}

const DetailScreen = ({
  route: {
    params: { movie },
  },
}: DetailScreenProps) => {
  const imageURI = getImageURI(movie.poster_path);
  const { height } = useWindowDimensions();

  return (
    <ScrollView>
      <View style={{ ...styles.posterContainer, height: height * 0.7 }}>
        <Image source={{ uri: imageURI }} style={styles.poster} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <Icon name="star-outline" size={30} />
    </ScrollView>
  );
};

export { DetailScreen };
