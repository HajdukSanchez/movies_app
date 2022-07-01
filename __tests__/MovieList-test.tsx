import React from 'react';
import { render } from '@testing-library/react-native';

import { MovieList } from '../src/components';
import { Movie } from '../src/common/interface/movies.interface';

let movies: Movie[] = [];

describe('<MovieList/>', () => {
  test('should render correctly', () => {
    const list = render(<MovieList movies={movies} />);
    expect(list).toMatchSnapshot();
  });
});
