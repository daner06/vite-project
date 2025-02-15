import { useEffect, useState } from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

import './App.css'

const url = 'https://jsonplaceholder.typicode.com/posts';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchData = async () => {
  const data = await axios.get<Post[]>(url);
  return data;
};

const App = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setData(response.data);
    };
    getData();
  }, [])

  return (
    <>
      <h2>List of posts</h2>
      <div>
        {data && (
          <DataGrid
            rows={data}
            columns={[
              { field: 'userId', headerName: 'User ID', width: 150 },
              { field: 'id', headerName: 'ID', width: 150 },
              { field: 'title', headerName: 'Title', width: 150 },
              { field: 'body', headerName: 'Body', width: 150 },
            ]}
            sx={{
              '& .MuiDataGrid-cell': {
                color: 'white',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#f5f5f5',
                color: 'black',
              },
            }}
          />)}
      </div>
    </>
  )
};

export default App;
