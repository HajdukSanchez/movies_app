import React from 'react';
import { StyleSheet, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { styles } from './GradientBackground.style';

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ ...StyleSheet.absoluteFillObject }}
        colors={['#5b1f1f', '#582d2d', '#c19999']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 0.8 }}
        children={children}
      />
    </View>
  );
};

export { GradientBackground };
