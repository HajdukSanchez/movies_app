import { StyleSheet } from 'react-native';
import { globalStyles } from '../../common/styles/global.style';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.shadow,
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
