import { StyleSheet } from 'react-native';
import { globalStyles } from '../../common/styles/global.style';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.shadow,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
  },
  imageContainer: {
    width: 60,
    height: 60,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  infoContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 14,
    opacity: 0.6,
  },
});
