import React from 'react';
import { ActivityIndicator } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Loading } from '../src/components';

describe('<Loading/>', () => {
  test('should render correctly', () => {
    const loader = render(<Loading />).toJSON();
    expect(loader).toMatchSnapshot();
  });

  it('should render correctly without props', () => {
    render(<Loading />);
    expect(screen.UNSAFE_getByType(ActivityIndicator)).toBeTruthy();
  });

  it('should render correctly with props', () => {
    render(<Loading size={100} color="red" />);
    expect(screen.UNSAFE_getByType(ActivityIndicator)).toBeTruthy();
    expect(screen.UNSAFE_getByType(ActivityIndicator).props.color).toEqual('red');
    expect(screen.UNSAFE_getByType(ActivityIndicator).props.size).toEqual(100);
  });
});
