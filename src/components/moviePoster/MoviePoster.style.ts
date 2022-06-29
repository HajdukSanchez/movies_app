import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  large: {
    width: 280,
    height: 420,
  },
  small: {
    width: 140,
    height: 200,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
});
