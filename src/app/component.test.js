import { render, fireEvent } from '@testing-library/react';
import { Component } from './Component';

test('Number goes up by one when clicking button', () => {
    const { getByText } = render(<Component />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(getByText('Count: 1')).toBeTruthy();
});