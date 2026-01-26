import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState(null);

  const url = 'https://ratenowpractisebackend-production.up.railway.app'
  useEffect(() => {
    axios.get(`${url}/home`, { withCredentials: true })
      .then(res => setData(res.data))
      .catch(err => alert('Unauthorized'));
  }, []);

  if(!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Home</h2>
      <div>{data.message}</div>
      <div>Data: {data.data.join(', ')}</div>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default HomePage;
