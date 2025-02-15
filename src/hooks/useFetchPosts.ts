import { useState, useEffect } from 'react'
import { fetchData, Post } from '../apiCalls/apiCalls'

export const useFetchPosts = () => {
  const [data, setData] = useState<Post[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData()
      setData(response.data)
    }
    getData()
  }, [])

  return { data }
};
