// C:\Users\User\f0\frontend\src\App.jsx

import './styles/App.css'; // Import the CSS file

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage';
import User1Register from './components/auth/User1RegisterForm';
import User1Login from './components/auth/User1LoginForm';
import User1Welcome from './pages/User1Welcome';

function App() {
  return (
    // <div className="App">
      <div id="root">
    <Router>
      <Header />

      <main className="main-content">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user1login" element={<User1Login />} />
          <Route path="/user1register" element={<User1Register />} />
          <Route path="/user1welcome" element={<User1Welcome />} />
          </Routes>
          </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
