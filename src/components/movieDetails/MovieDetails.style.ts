import { StyleSheet } from 'react-native';
import { globalStyles } from '../../common/styles/global.style';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },
  informationContainer: {
    ...globalStyles.marginHorizontal,
    marginBottom: 15,
  },
  raiting: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 5,
  },
  date: {
    paddingTop: 5,
  },
  genders: {
    paddingBottom: 10,
    fontSize: 14,
    opacity: 0.6,
  },
  budget: {
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    paddingVertical: 5,
    fontSize: 16,
  },
  titleCast: {
    ...globalStyles.marginHorizontal,
    paddingBottom: 10,
  },
});
