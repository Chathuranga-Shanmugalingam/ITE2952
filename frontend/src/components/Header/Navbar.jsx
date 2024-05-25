import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if session exists
    const loggedIn = sessionStorage.getItem('loggedInEmail');
    setIsLoggedIn(!!loggedIn);
  }, [location]);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInEmail'); // Remove loggedInEmail from sessionStorage
    setIsLoggedIn(false); // Update isLoggedIn state
    navigate('/'); // Redirect to homepage
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {!isLoggedIn && (
          <li className="dropdown">
            <a href="#" className="dropbtn" onClick={handleDropdownClick}>Login</a>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              <div className="dropdown-submenu">
                <a href="#" className="submenu-btn">Login as User1</a>
              </div>
              <Link to="/user1login" onClick={() => handleLinkClick('/user1login')}>Login as User1</Link>
            </div>
          </li>
        )}
        {isLoggedIn && (
          <li><a href="#" onClick={handleLogout}>Logout</a></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
