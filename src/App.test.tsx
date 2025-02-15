import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App', () => {
  test('renders the component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText('List of posts')).toBeInTheDocument();
  });

  test('renders the data grid headers', () => {
    render(<App />);
    expect(screen.getByText('User ID')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});
