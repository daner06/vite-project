import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchData = async () => {
  const data = await axios.get<Data>(url);
  return data;
};

const App = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setData(response.data);
    };
    getData();
  }, [])

  return (
    <>
      <p>Daniel test</p>
      <div>{JSON.stringify(data)}</div>
    </>
  )
};

export default App;
