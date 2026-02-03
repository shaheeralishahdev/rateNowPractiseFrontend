import { useState } from 'react';
import axios from 'axios';
import { useNavigate,useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl"); // get ?redirectUrl=
  
//   const url = 'http://localhost:5000'
const url = 'https://ratenowpractisebackend-production.up.railway.app'
  const handleLogin = async () => {
    try {
      console.log("redirectUrl", redirectUrl);
      await axios.post(`${url}/login`, { email, password,redirectUrl }, {
        withCredentials: true // important to store cookie
      });
      console.log("token");
      if (redirectUrl) {
        // Redirect to mobile deep link with token
        // window.location.href = `${redirectUri}?token=${token}`;
      } else {
        navigate('/home');
      }
    } catch(err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
      <p>Redirect Url: {redirectUrl}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export default LoginPage;
