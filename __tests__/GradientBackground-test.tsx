import React from 'react';
import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { GradientBackground } from '../src/components';

describe('<GradientBackground/>', () => {
  let child: JSX.Element;
  let children: JSX.Element[];

  beforeAll(() => {
    child = <Text>Hello</Text>;
    children = [child, child, child];
  });

  test('should render correctly with one child', () => {
    const bg = render(<GradientBackground children={child} />).toJSON();
    expect(bg).toMatchSnapshot();
    expect(screen.getByText('Hello')).toBeTruthy();
  });

  test('should render correctly with children', () => {
    const bg = render(<GradientBackground children={children} />).toJSON();
    expect(bg).toMatchSnapshot();
    const items = screen.getAllByText('Hello');
    expect(items).toBeTruthy();
    expect(items).toHaveLength(3);
  });
});
