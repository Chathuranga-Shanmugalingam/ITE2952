// C:\Users\User\f0\frontend\src\components\auth\User1RegisterForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User1AuthService from '../../services/User1AuthService';
import '../../styles/RegisterForm.css';

const User1RegisterForm = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telephoneNo, setTelephoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let errors = {};
        if (!firstname.trim()) {
            errors.firstname = 'First Name is required';
        }
        if (!lastname.trim()) {
            errors.lastname = 'Last Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 1) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if (password !== repeatPassword) {
            errors.repeatPassword = 'Passwords do not match';
        }
        return errors;
    };

    const handleRegister = async () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            await User1AuthService.user1register(firstname, lastname, telephoneNo, address, email, password);
            setSuccessMessage('Registration successful!');
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Error during registration:', error);
            setErrors({ email: error.message });
        }
    };

    return (
        <div className="register-form">
            {successMessage && <div>{successMessage}</div>}
            <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
            />
            {errors.firstname && <span>{errors.firstname}</span>}
            <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
            />
            {errors.lastname && <span>{errors.lastname}</span>}
            <input
                type="text"
                placeholder="Telephone Number"
                value={telephoneNo}
                onChange={(e) => setTelephoneNo(e.target.value)}
                required
            />
            {errors.telephoneNo && <span>{errors.telephoneNo}</span>}
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            {errors.address && <span>{errors.address}</span>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            {errors.email && <span>{errors.email}</span>}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {errors.password && <span>{errors.password}</span>}
            <input
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
            />
            {errors.repeatPassword && <span>{errors.repeatPassword}</span>}

            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default User1RegisterForm;
