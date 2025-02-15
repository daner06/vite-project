import { renderHook, waitFor } from '@testing-library/react';
import { useFetchPosts } from '../hooks/useFetchPosts';
import { fetchData, Post } from '../apiCalls/apiCalls';
import { describe, expect, test, vi } from 'vitest';
import { InternalAxiosRequestConfig } from 'axios';

const mockPosts: Post[] = [{
  id: 1, title: 'Post 1',
  userId: 0,
  body: 'test 1',
}, {
  id: 2, title: 'Post 2',
  userId: 0,
  body: 'test 2',
}];

vi.mock('../apiCalls/apiCalls', () => ({
  fetchData: vi.fn()
}));

describe('useFetchPosts', () => {
  test('fetches and sets posts', async () => {
    const mockResponse = {
      data: mockPosts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {} as InternalAxiosRequestConfig,
      request: {}
    };

    vi.mocked(fetchData).mockImplementation(() => Promise.resolve(mockResponse));

    const { result } = renderHook(() => useFetchPosts());

    await waitFor(() => {
      expect(result.current.data).toEqual(mockPosts)
    });
  })
})
