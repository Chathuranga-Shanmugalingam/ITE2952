// C:\Users\User\f0\frontend\src\components\auth\User1LoginForm.jsx

import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import User1AuthService from '../../services/User1AuthService';

const User1LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        setLoading(true);
        try {
            const data = await User1AuthService.user1login(email, password);
            sessionStorage.setItem('loggedInEmail', data.email);
            setSuccessMessage(`Logged in as: ${data.email}`);
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/user1welcome'); 
            }, 3000);
        } catch (error) {
            console.error('Error during login:', error);
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {error && <div>{error}</div>}
            {successMessage && <div>{successMessage}</div>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </div>
    );
};

export default User1LoginForm;
