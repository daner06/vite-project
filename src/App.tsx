import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import './App.css'
import { fetchData, Post } from './app.data';

const columns = [
  { field: 'userId', headerName: 'User ID', width: 150 },
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'body', headerName: 'Body', width: 150 },
];

const dataGridStyle = {
  '& .MuiDataGrid-cell': {
    color: 'white',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#f5f5f5',
    color: 'black',
  },
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
            columns={columns}
            sx={dataGridStyle}
          />)}
      </div>
    </>
  )
};

export default App;
