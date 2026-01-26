import { useEffect, useState } from 'react';
import { api } from '../utils/api';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/profile')
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
