import React from 'react';
import { render } from '@testing-library/react';
import { BasicTypes } from './types.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTypes />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
