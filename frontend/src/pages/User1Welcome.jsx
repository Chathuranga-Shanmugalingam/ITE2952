// C:\Users\User\f0\frontend\src\pages\User1Welcome.jsx

import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';

const User1Welcome = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loggedInEmail = sessionStorage.getItem('loggedInEmail');
        if (!loggedInEmail) {
            navigate('/user1login'); // Redirect to login if user is not logged in
        } else {
            // Fetch user data using the logged-in email
            axios.get(`http://localhost:8000/api/user-data/${loggedInEmail}/`)
                .then(response => {
                    setUserData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    navigate('/user1login'); // Redirect to login in case of error
                });
        }
    }, [navigate]);

    return (
        <div>
            {userData ? (
                <div>
                    <h2>Welcome, {userData.email}!</h2>
                    <Link to={{ pathname: "/", state: { userData: userData } }}>Go to...</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default User1Welcome;
