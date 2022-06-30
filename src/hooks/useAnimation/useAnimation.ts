import { useRef } from 'react';
import { Animated } from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current; // Start opacity in 0

  const fadeIn = (duration: number = 500) => {
    Animated.timing(opacity, {
      duration,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (duration: number = 500) => {
    Animated.timing(opacity, {
      duration,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};

export { useAnimation };
