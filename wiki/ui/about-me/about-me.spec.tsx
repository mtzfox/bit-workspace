import React from 'react';
import { render } from '@testing-library/react';
import { BasicAboutMe } from './about-me.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAboutMe />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
