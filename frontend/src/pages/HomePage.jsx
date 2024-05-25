// C:\Users\User\a1\frontend\src\pages\Home\index.jsx

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h4>Welcome to Computer Shop </h4>
      <Link to="/user1login">User1LoginForm</Link>
      <br/>
      <br/>
      <Link to="/user1register">User1RegisterForm</Link>
      <br/>
    </div>
  );
};

export default HomePage;

