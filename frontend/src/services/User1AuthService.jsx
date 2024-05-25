// C:\Users\User\d8\frontend\src\services\User1AuthService.jsx

class User1AuthService {

    static async user1register(firstName, lastName, telephoneNo, address, email, password) {
        const response = await fetch('http://localhost:8000/api/user1register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, telephoneNo, address, email, password }),
        });
        if (!response.ok) {
            if (response.status === 400) {
                const errorData = await response.json();
                throw new Error(errorData.email[0]); // Assuming the backend returns an error message for duplicate email
            }
            throw new Error('Registration failed');
        }
        return await response.json();
    }

    static async user1login(email, password) {
        const response = await fetch('http://localhost:8000/api/user1login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Invalid credentials');
            }
            throw new Error('Login failed');
        }
        const data = await response.json();
        if (!('email' in data)) {
            throw new Error('Email not found in response');
        }
        return data;
    }
}

export default User1AuthService;
