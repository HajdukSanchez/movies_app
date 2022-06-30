import { StyleSheet } from 'react-native';
import { globalStyles } from '../../common/styles/global.style';

export const styles = StyleSheet.create({
  posterContainer: {
    ...globalStyles.shadow,
    width: '100%',
  },
  poster: {
    flex: 1,
  },
  infoContainer: {
    ...globalStyles.marginHorizontal,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.6,
  },
  loading: {
    marginVertical: 20,
  },
  buttonBack: {
    position: 'absolute',
    right: 20,
    padding: 0,
    borderRadius: 100,
    backgroundColor: 'white',
    zIndex: 10,
    ...globalStyles.shadow,
  },
});
