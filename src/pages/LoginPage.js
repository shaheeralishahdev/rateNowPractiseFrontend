import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();
//   const url = 'http://localhost:5000'
const url = 'https://ratenowpractisebackend-production.up.railway.app'
  const handleLogin = async () => {
    try {
      await axios.post(`${url}/login`, { email, password }, {
        withCredentials: true // important to store cookie
      });
      navigate('/home');
    } catch(err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export default LoginPage;
