import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';

import App from './App';
import { useFetchPosts } from './hooks/useFetchPosts';
import { Post } from './apiCalls/apiCalls';

vi.mock('./hooks/useFetchPosts', () => ({
  useFetchPosts: vi.fn()
}));

describe('App', () => {
  beforeEach(() => {
    vi.mocked(useFetchPosts).mockReturnValue({ data: [] });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders the component', () => {
    render(<App />);
    expect(screen.getByText('List of posts')).toBeInTheDocument();
  });

  test('renders the data grid headers', () => {
    render(<App />);
    expect(screen.getByText('User ID')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  test('renders the data grid with data', () => {
    const mockData: Post[] =  [{
      userId: 1,
      id: 1,
      title: 'Post 1',
      body: 'Test 1',
    }];
    vi.mocked(useFetchPosts).mockImplementation(() => ({ data: mockData }));

    render(<App />);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test 1')).toBeInTheDocument();
  });
});
