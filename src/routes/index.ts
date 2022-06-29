import { Movie } from '../common/interface/movies.interface';

/**
 * Params for Sack navigation.
 */
export type RootStackParamList = {
  Home: undefined;
  Detail: { movie: Movie };
};
