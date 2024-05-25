// C:\Users\User\a1\frontend\src\pages\WelcomePage.jsx

import { useEffect, useState } from 'react';

const WelcomePage = () => {
  const [loggedInEmail, setLoggedInEmail] = useState('');
  const [managementLevel, setManagementLevel] = useState('');

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to the login page
    window.location.href = '/'; // or navigate to the login page using router if you are using BrowserRouter
  };

  useEffect(() => {
    // Retrieve logged-in email from sessionStorage
    const email = sessionStorage.getItem('loggedInEmail');
    setLoggedInEmail(email);

    // Retrieve management level from sessionStorage
    const level = sessionStorage.getItem('managementLevel');
    setManagementLevel(level);

    // Redirect to the login page if there is no logged-in email
    if (!email) {
        window.location.href = '/'; // or navigate to the login page using router if you are using BrowserRouter
    }
}, []);


  return (
    <div>
      <h2>Welcome to Computer Shop</h2>
      {loggedInEmail && managementLevel && (
        <p>
          {`User1 for ${managementLevel} as ${loggedInEmail}`}
        </p>

      )}
      <button onClick={handleLogout}>Logout</button>

    </div>
  );
};

export default WelcomePage;
