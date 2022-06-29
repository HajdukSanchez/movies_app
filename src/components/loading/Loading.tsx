import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './Loading.style';

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading = ({ color = 'red', size = 100 }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export { Loading };
