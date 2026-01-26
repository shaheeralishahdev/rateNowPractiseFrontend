import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  const url = 'https://ratenowpractisebackend-production.up.railway.app'
  useEffect(() => {
    console.log('web profile screen call');
    
    axios.get(`${url}/profile`, { withCredentials: true })
      .then(res => setProfile(res.data.profile))
      .catch(err => alert('Unauthorized'));
  }, []);

  if(!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <div>Name: {profile.name}</div>
      <div>Email: {profile.email}</div>
    </div>
  );
};

export default ProfilePage;
