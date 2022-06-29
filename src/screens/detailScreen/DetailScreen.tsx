import React from 'react';
import { View, Text } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';

interface DetailScreenProps extends StackScreenProps<RootStackParamList, 'Detail'> {}

const DetailScreen = ({
  route: {
    params: { movie },
  },
}: DetailScreenProps) => {
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export { DetailScreen };
