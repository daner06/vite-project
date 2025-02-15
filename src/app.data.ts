import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchData = async () => {
  const data = await axios.get<Post[]>(url);
  return data;
};
